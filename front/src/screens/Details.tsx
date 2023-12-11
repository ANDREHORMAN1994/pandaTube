import { useContext, useEffect, useRef, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { HStack, Heading, Icon, Text, VStack, useToast } from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { format } from 'date-fns';
import { TouchableOpacity } from 'react-native';
import {
  useNavigation,
  useRoute,
  type RouteProp,
  useNavigationState,
} from '@react-navigation/native';

import { type AppRoutesNavigationProps } from '@routes/app.routes';
import MovieSvg from '@assets/movie.svg';
import VideoWeb from '@components/VideoWeb';
import Loading from '@components/Loading';
import { createHistory, getVideoById } from '@utils/index';
import { type IHistorySection, type IMovie } from 'src/types';
import { AuthContext } from '../context/Provider';

type StackParamList = {
  Details: {
    id: string;
  };
};

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

function Details() {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const { setIsAuth } = useContext(AuthContext);
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>();

  const toast = useToast();
  const navigation = useNavigation<AppRoutesNavigationProps>();
  const { routeNames, index } = useNavigationState((state) => state);
  const route = routeNames[index];

  const redirect = () => {
    navigation.goBack();
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

  useEffect(() => {
    const request = async () => {
      const token = (await getToken()) ?? '';
      if (!token) return setIsAuth(false);
      const video = await getVideoById(id, token);
      if ('error' in video) {
        showToast.current(video.error);
      } else {
        const infoHistory: IHistorySection = {
          title: format(new Date(), 'dd.MM.yy'),
          data: [
            {
              id,
              name: video.name,
              description: video.description,
              hour: format(new Date(), 'HH:mm'),
            },
          ]
        }

        await createHistory(infoHistory, token);
        setMovie(video);
      }
    };

    if (route === 'details') {
      request();
    }
  }, [id, route, setIsAuth]);

  useEffect(() => {
    if (route !== 'details') {
      setMovie(null);
    }
  }, [route]);

  if (!movie) return <Loading />;

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12} w="full">
        <TouchableOpacity onPress={redirect}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack alignItems="center">
          <Heading
            fontFamily="heading"
            flex={1}
            flexShrink={1}
            color="gray.100"
            fontSize="lg"
            mt={3}
            mb={5}
          >
            {movie.name}
          </Heading>
          <HStack alignItems="center">
            <MovieSvg />
            <Text color="gray.200" fontSize="sm" textTransform="uppercase" ml={2}>
              {movie.categorie}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack flex={1} m={8} position="relative" h="full">
        {!isVideoReady && <Loading />}
        <VideoWeb
          isVideoReady={isVideoReady}
          setIsVideoReady={setIsVideoReady}
          movie={movie}
        />
      </VStack>
    </VStack>
  );
}

export default Details;
