import { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, VStack, useTheme } from 'native-base';
import { Video, ResizeMode } from 'expo-av';
import { useNavigationState } from '@react-navigation/native';
import DownloadSvg from '@assets/download.svg';
import { getVideoFile } from '@utils/index';
import Button from './Button';

type Movie = {
  id: string;
  name: string;
  description: string;
  categorie: string;
  ref: string;
  sinopse: string;
  imgUri?: string;
  videoPlayerId?: string;
  videoPlayerUri?: string;
};

type Props = {
  movie: Movie;
  isVideoReady: boolean;
  setIsVideoReady: (value: boolean) => void;
};

function VideoWeb({ movie, isVideoReady, setIsVideoReady }: Props) {
  const [pathFile, setPathFile] = useState<string>('');
  const video = useRef<any>(null);
  const { sizes } = useTheme();

  const { routeNames, index } = useNavigationState(state => state);
  const route = routeNames[index];

  useEffect(() => {
    if (route !== 'details') {
      video.current?.pauseAsync();
    }
  }, [route]);

  useEffect(() => {
    const request = (path: string) => {
      const videoPath = getVideoFile(path)
      setPathFile(videoPath);
    }

    request(movie.videoPlayerId ?? '');
  }, [movie.videoPlayerId]);

  return (
    <VStack w="full" h="full" position="absolute" top={0} left={0}>
      <Video
        ref={video}
        style={{
          alignSelf: 'center',
          width: '100%',
          height: sizes[56],
          borderRadius: 5,
        }}
        source={ { uri: pathFile } }
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={newStatus => setIsVideoReady(newStatus.isLoaded)}
        useNativeControls
        isLooping
      />
      {isVideoReady && (
        <ScrollView w="full" h="full">
          <VStack bg="gray.600" w="full" px={4} py={5} mt={5} rounded="md">
            <Text
              color="gray.100"
              fontFamily="body"
              fontSize="sm"
              textAlign="center"
              mb={5}
            >
              {movie.sinopse}
            </Text>
            <Button
              name="Baixar Vídeo"
              icon={<DownloadSvg />}
            />
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}

export default VideoWeb;
