import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { HStack, Heading, Icon, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { type AppRoutesNavigationProps } from '@routes/app.routes';
import MovieSvg from '@assets/movie.svg';
import VideoWeb from '@components/VideoWeb';
import Loading from '@components/Loading';

function Details() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const navigation = useNavigation<AppRoutesNavigationProps>();

  const redirect = () => {
    navigation.goBack();
  };

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12} w="full">
        <TouchableOpacity onPress={redirect}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>
        <HStack alignItems="center">
          <Heading flex={1} flexShrink={1} color="gray.100" fontSize="lg" mt={3} mb={5}>
            Rambo IV
          </Heading>
          <HStack alignItems="center">
            <MovieSvg />
            <Text color="gray.200" fontSize="sm" ml={2}>
              Ação
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <VStack flex={1} m={8} position="relative" h="full">
        {!isVideoReady && (
          <Loading />
        )}
        <VideoWeb
          isVideoReady={isVideoReady}
          setIsVideoReady={setIsVideoReady}
        />
      </VStack>
    </VStack>
  );
}

export default Details;
