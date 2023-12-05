import { useEffect, useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { type AppRoutesNavigationProps } from '@routes/app.routes';
import GroupCategories from '@components/GroupCategories';
import HomeHeader from '@components/HomeHeader';
import Loading from '@components/Loading';
import VideoCard from '@components/VideoCard';

type Movie = {
  id: number;
  name: string;
  description: string;
  uri: string;
};

const CATEGORIES_LIST = ['todos', 'ação', 'terror', 'anime', 'comédia'];
const MOVIES_LIST = [
  { id: 0, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', uri: 'https://github.com/ANDREHORMAN1994.png' },
  { id: 1, name: 'Debi & Loide', description: '1994 ‧ Comédia ‧ 1h 53m', uri: 'https://github.com/ANDREHORMAN1994.png' },
  { id: 2, name: 'Yu Yu Hakusho', description: '1992 ‧ Anime ‧ 112 episódios', uri: 'https://github.com/ANDREHORMAN1994.png' },
  { id: 3, name: 'A Maldição da Chorona', description: '2019 ‧ Terror ‧ 1h 34m', uri: 'https://github.com/ANDREHORMAN1994.png' },
  { id: 4, name: 'Chapolin', description: '2019 ‧ Terror ‧ 1h 34m', uri: 'https://github.com/ANDREHORMAN1994.png' },
];

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const navigation = useNavigation<AppRoutesNavigationProps>();

  const redirect = () => {
    navigation.navigate('details');
  }

  useEffect(() => {
    setCategories(CATEGORIES_LIST);
    setActiveCategory(CATEGORIES_LIST[0]);
    setMovies(MOVIES_LIST);
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
          <Heading flex={1} color="gray.100" fontSize="xl">
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
          keyExtractor={(item: Movie) => item.id.toString()}
          renderItem={({ item: { name, description, uri } }) => (
            <VideoCard
              name={name}
              description={description}
              uri={uri}
              onPress={redirect}
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
