import { useEffect, useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { type AppRoutesNavigationProps } from '@routes/app.routes';
import GroupCategories from '@components/GroupCategories';
import HomeHeader from '@components/HomeHeader';
import Loading from '@components/Loading';
import VideoCard from '@components/VideoCard';
import { downloadVideo, getAllVideos } from '@utils/index';
import { type IMovie } from 'src/types';

const CATEGORIES_LIST = ['todos', 'ação', 'terror', 'anime', 'comédia'];

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const navigation = useNavigation<AppRoutesNavigationProps>();

  const redirect = (id: string) => {
    navigation.navigate('details', { id });
  }

  useEffect(() => {
    const request = async () => {
      const videos = await getAllVideos();
      await Promise.all(videos.map(async ({ videoPlayerId }) => {
        if (!videoPlayerId) return;
        await downloadVideo(videoPlayerId);
      }));

      setCategories(CATEGORIES_LIST);
      setActiveCategory(CATEGORIES_LIST[0]);
      setMovies(videos);
    };

    request();
  }, []);

  if (!categories.length) return <Loading />;

  return (
    <VStack flex={1}>
      <HomeHeader />
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
          data={movies
            .filter(({description}) => {
              if (activeCategory === 'todos') return true;
              return description.toLowerCase().includes(activeCategory.toLowerCase());
            })}
          keyExtractor={(item: IMovie) => item.id}
          renderItem={({ item: {id, name, description, imgUri } }) => (
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
