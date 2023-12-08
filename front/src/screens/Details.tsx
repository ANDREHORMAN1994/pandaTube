import { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { HStack, Heading, Icon, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import {
  useNavigation,
  useRoute,
  type RouteProp,
} from '@react-navigation/native';

import { type AppRoutesNavigationProps } from '@routes/app.routes';
import MovieSvg from '@assets/movie.svg';
import VideoWeb from '@components/VideoWeb';
import Loading from '@components/Loading';
import { getVideoById } from '@utils/index';
import { type IMovie } from 'src/types';

type StackParamList = {
  Details: {
    id: string;
  };
};

type DetailsScreenRouteProp = RouteProp<StackParamList, 'Details'>;

function Details() {
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const {
    params: { id },
  } = useRoute<DetailsScreenRouteProp>();

  const navigation = useNavigation<AppRoutesNavigationProps>();

  const redirect = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const request = async () => {
      const video = await getVideoById(id);
      setMovie(video);
    };

    request();
  }, [id]);

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
