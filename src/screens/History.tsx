import { useEffect, useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';
import HistoryCard from '@components/HistoryCard';
import Title from '@components/Title';

type Movie = {
  id: number;
  name: string;
  description: string;
  hour: string;
};

type HistoryList = {
  title: string;
  data: Movie[];
};

const HISTORY_LIST = [
  {
    title: '04.12.23',
    data: [{ id: 0, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' }],
  },
  {
    title: '03.12.23',
    data: [
      { id: 0, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 1, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 2, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
    ],
  },
  {
    title: '02.12.23',
    data: [
      { id: 0, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 1, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 2, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
    ],
  },
  {
    title: '01.12.23',
    data: [
      { id: 0, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 1, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 2, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
      { id: 3, name: 'Rambo IV', description: '2008 ‧ Ação ‧ 1h 33m', hour: '20:00' },
    ],
  },
];

function History() {
  const [historyList, setHistoryList] = useState<HistoryList[]>([]);

  useEffect(() => {
    setHistoryList(HISTORY_LIST);
  }, []);

  return (
    <VStack>
      <Title title="Histórico de Filmes" />
      <VStack px={8} py={2}>
        <SectionList
          sections={historyList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ section, item }) => (
            <HistoryCard
              key={section.title + item.id}
              name={item.name}
              description={item.description}
              hour={item.hour}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Heading color="gray.200" fontSize="lg" fontFamily="heading" my={5}>
              {title}
            </Heading>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            historyList.length === 0 && {
              height: '100%',
              justifyContent: 'center',
            }
          }
          ListEmptyComponent={() => (
            <Text color="gray.100" textAlign="center">
              Nenhuma atividade registrada
            </Text>
          )}
          mb="4/6"
        />
      </VStack>
    </VStack>
  );
}

export default History;
