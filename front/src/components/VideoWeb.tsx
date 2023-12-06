import { useEffect, useRef } from 'react';
import { ScrollView, Text, VStack, useTheme } from 'native-base';
import { Video, ResizeMode } from 'expo-av';
import { useNavigationState } from '@react-navigation/native';
import file from '@assets/Black_Sheep_Scott_Pilgrim.mp4';
import DownloadSvg from '@assets/download.svg';
import Button from './Button';

type Props = {
  isVideoReady: boolean;
  setIsVideoReady: (value: boolean) => void;
};

function VideoWeb({ isVideoReady, setIsVideoReady }: Props) {
  const video = useRef<any>(null);
  const { sizes } = useTheme();

  const { routeNames, index } = useNavigationState(state => state);
  const route = routeNames[index];

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
        source={file}
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
            O veterano de guerra John Rambo é recrutado para resgatar missionários capturados na Birmânia, desencadeando uma missão de ação intensa.
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
