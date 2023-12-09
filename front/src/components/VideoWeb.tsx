import { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, VStack, useTheme, useToast } from 'native-base';
import { Video, ResizeMode } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { useNavigationState } from '@react-navigation/native';
import DownloadSvg from '@assets/download.svg';
import { getVideoFile } from '@utils/index';
import { type IMovie } from 'src/types';
import Button from './Button';

type Props = {
  movie: IMovie;
  isVideoReady: boolean;
  setIsVideoReady: (value: boolean) => void;
};

function VideoWeb({ movie, isVideoReady, setIsVideoReady }: Props) {
  const [pathFile, setPathFile] = useState<string>('');
  const { sizes } = useTheme();
  const video = useRef<any>(null);
  const toast = useToast();
  const { routeNames, index } = useNavigationState((state) => state);
  const route = routeNames[index];

  const showToast = useRef((message: string) => {
    toast.closeAll();
    toast.show({
      title: 'Concluído',
      description: message,
      placement: 'top',
      bgColor: 'green.500',
    });
  });

  const requestVideoUrl = (path: string) => getVideoFile(path);

  const downloadVideo = async (videoName: string) => {
    const videoUrl = requestVideoUrl(movie.videoPlayerId ?? '');

    const downloadObject = FileSystem.createDownloadResumable(
      videoUrl,
      FileSystem.documentDirectory + videoName
    );

    const uri = await downloadObject.downloadAsync();
    if (uri) {
      showToast.current('Vídeo baixado com sucesso!');
      setPathFile(uri?.uri);
    }
  };

  useEffect(() => {
    const checkIfFileExists = async () => {
      const fileInfo = await FileSystem.getInfoAsync(
        FileSystem.documentDirectory + movie.ref
      );
      if (fileInfo.exists) {
        setPathFile(fileInfo.uri);
      } else if (movie.videoPlayerId) {
        const videoUrl = requestVideoUrl(movie.videoPlayerId);
        setPathFile(videoUrl);
      }
    };

    checkIfFileExists();
  }, [movie.ref, movie.videoPlayerId]);

  useEffect(() => {
    if (route !== 'details') {
      video.current?.pauseAsync();
    }
  }, [route]);

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
        source={{ uri: pathFile }}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(newStatus) =>
          setIsVideoReady(newStatus.isLoaded)
        }
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
              onPress={async () => downloadVideo(movie.ref)}
            />
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}

export default VideoWeb;
