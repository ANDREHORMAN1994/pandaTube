import { useContext, useEffect, useRef, useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text, useToast } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { type AppRoutesNavigationProps } from '@routes/app.routes';
import GroupCategories from '@components/GroupCategories';
import HomeHeader from '@components/HomeHeader';
import Loading from '@components/Loading';
import VideoCard from '@components/VideoCard';
import { downloadVideo, getAllVideos, getUserById } from '@utils/index';
import { type IUser, type IMovie } from 'src/types';
import { AuthContext } from '../context/Provider';

const CATEGORIES_LIST = ['todos', 'ação', 'terror', 'anime', 'comédia'];

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [user, setUser] = useState<IUser | null>(null);

  const { setIsAuth } = useContext(AuthContext);
  const toast = useToast();
  const navigation = useNavigation<AppRoutesNavigationProps>();

  const redirect = (id: string) => {
    navigation.navigate('details', { id });
  };

  const getToken = async () => {
    const token = await SecureStore.getItemAsync('token');
    return token;
  };

  const showToast = useRef((message: string) => {
    toast.closeAll();
    toast.show({
      title: 'Atenção',
      description: message,
      placement: 'top',
      bgColor: 'red.500',
    });
  });

  const getUserId = async () => {
    const userId = await SecureStore.getItemAsync('userId');
    return userId;
  };

  useEffect(() => {
    const request = async () => {
      const token = (await getToken()) ?? '';
      const id = (await getUserId()) ?? '';
      if (!token) return setIsAuth(false);
      if (id) {
        const userInfo = await getUserById(id, token);
        if ('name' in userInfo) {
          setUser(userInfo);
        }
      }
      const videos = await getAllVideos(token);
      if ('error' in videos) {
        showToast.current(videos.error);
      } else {
        await Promise.all(
          videos.map(async ({ videoPlayerId }) => {
            if (!videoPlayerId) return;
            await downloadVideo(videoPlayerId, token);
          })
        );

        setCategories(CATEGORIES_LIST);
        setActiveCategory(CATEGORIES_LIST[0]);
        setMovies(videos);
      }
    };

    request();
  }, [setIsAuth, showToast]);

  if (!categories.length) return <Loading />;

  return (
    <VStack flex={1}>
      <HomeHeader user={user} setIsAuth={setIsAuth} />
      <HStack my={8}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item: string) => item}
          renderItem={({ item }) => (
            <GroupCategories
              name={item}
              isActive={item.toLowerCase() === activeCategory.toLowerCase()}
              onPress={() => setActiveCategory(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
        />
      </HStack>
      <VStack px={8}>
        <HStack mb={5}>
          <Heading flex={1} color="gray.100" fontSize="xl" fontFamily="heading">
            Vídeos
          </Heading>
          <Text color="green.500" fontSize="xl">
            {movies.length}
          </Text>
        </HStack>
        <FlatList
          data={movies.filter(({ description }) => {
            if (activeCategory === 'todos') return true;
            return description
              .toLowerCase()
              .includes(activeCategory.toLowerCase());
          })}
          keyExtractor={(item: IMovie) => item.id}
          renderItem={({ item: { id, name, description, imgUri } }) => (
            <VideoCard
              name={name}
              description={description}
              imgUri={imgUri?.replace('localhost', '10.0.2.2') ?? ''}
              onPress={() => redirect(id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 'full' }}
        />
      </VStack>
    </VStack>
  );
}

export default Home;
