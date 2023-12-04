import GroupCategories from "@components/GroupCategories";
import HomeHeader from "@components/HomeHeader";
import Loading from "@components/Loading";
import { HStack, VStack, FlatList } from "native-base";
import { useEffect, useState } from "react";

const CATEGORIES_LIST = ['ação', 'terror', 'animes', 'comédia'];

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');

  useEffect(() => {
    setCategories(CATEGORIES_LIST);
    setActiveCategory(CATEGORIES_LIST[0]);
  }, [])

  if (!categories.length) return <Loading />

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
              isActive={item === activeCategory}
              onPress={() => setActiveCategory(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ px: 8 }}
        />
      </HStack>
    </VStack>
  )
}

export default Home;
