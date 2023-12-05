import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Text, VStack } from 'native-base';
import { Video, ResizeMode } from 'expo-av';
import file from '@assets/Black_Sheep_Scott_Pilgrim.mp4';
import DownloadSvg from '@assets/download.svg';
import Button from './Button';

type Props = {
  setIsVideoReady: (value: boolean) => void;
};

function VideoWeb({ setIsVideoReady }: Props) {
  const video = useRef<any>(null);

  return (
    <VStack w="full" position="absolute" top={0} left={0}>
      <Video
        ref={video}
        style={styles.video}
        source={file}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={newStatus => setIsVideoReady(newStatus.isLoaded)}
        useNativeControls
        isLooping
      />
      <VStack bg="gray.500" w="full" p={5} mt={5} rounded="sm">
        <Text
          color="#FFF"
          fontFamily="body"
          fontSize="sm"
          textAlign="center"
          numberOfLines={10}
          mb={5}
        >
        O veterano de guerra John Rambo é recrutado para resgatar missionários capturados na Birmânia, desencadeando uma missão de ação intensa.
        </Text>
        <Button
          name="Baixar Vídeo"
          icon={<DownloadSvg />}
        />
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 220,
    borderRadius: 5,
  },
});

export default VideoWeb;
