import { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, VStack, useTheme, useToast } from 'native-base';
import { Video, ResizeMode } from 'expo-av';
import RNFS from 'react-native-fs';
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

  const downloadVideoSystem = async (
    videoUrl: string,
    downloadDest: string
  ) => {
    const options = {
      fromUrl: videoUrl,
      toFile: downloadDest,
      background: true,
    };

    const download = RNFS.downloadFile(options);
    const result = await download.promise;
    return result;
  };

  const downloadVideoExpoFile = async (videoName: string) => {
    try {
      const videoUrl = requestVideoUrl(movie.videoPlayerId ?? '');
      const downloadDest = `${RNFS.DownloadDirectoryPath}/${videoName}`;

      const downloadObject = FileSystem.createDownloadResumable(
        videoUrl,
        FileSystem.documentDirectory + videoName
      );

      const uri = await downloadObject.downloadAsync();

      if (uri) {
        await downloadVideoSystem(videoUrl, downloadDest);
        setPathFile(uri?.uri);
        showToast.current('Vídeo baixado com sucesso!');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
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
        const videoUrl = requestVideoUrl(movie?.videoPlayerId);
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
              onPress={async () => downloadVideoExpoFile(movie.ref)}
            />
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}

export default VideoWeb;
