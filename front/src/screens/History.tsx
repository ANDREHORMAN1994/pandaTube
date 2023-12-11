import { useContext, useEffect, useRef, useState } from 'react';
import { Heading, VStack, SectionList, Text, useToast } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { useNavigationState } from '@react-navigation/native';
import HistoryCard from '@components/HistoryCard';
import Title from '@components/Title';
import { type IHistorySection } from 'src/types';
import { getAllHistory } from '@utils/index';
import { AuthContext } from '../context/Provider';

function History() {
  const [historyList, setHistoryList] = useState<IHistorySection[]>([]);

  const { setIsAuth } = useContext(AuthContext);
  const toast = useToast();
  const { routeNames, index } = useNavigationState(state => state);
  const route = routeNames[index];

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

  useEffect(() => {
    const request = async () => {
      const token = (await getToken()) ?? '';
      if (!token) return setIsAuth(false);
      const history = await getAllHistory(token);
      if ('error' in history) {
        showToast.current(history.error);
      } else {
        const sortHistory = [...history].sort((a, b): number => {
          if (a?.title > b?.title) return -1;
          if (a?.title < b?.title) return 1;
          return 0;
        });
        setHistoryList(sortHistory);
      }
    };

    if (route === 'history') {
      request();
    }
  }, [route, setIsAuth]);

  return (
    <VStack>
      <Title title="Histórico de Filmes" />
      <VStack px={8} py={2}>
        <SectionList
          sections={historyList}
          keyExtractor={(item) => item.id}
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
