import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { HStack, Heading, Image, Text, VStack, Icon } from 'native-base';
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  name: string;
  description: string;
  imgUri: string;
};

function VideoCard({ name, description, imgUri, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        w="full"
        p={3}
        mb={3}
        rounded="md"
        alignItems="center"
      >
        <Image
          source={{ uri: imgUri }}
          w={16}
          h={16}
          rounded="md"
          mr={4}
          alt="Imagem do vídeo"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontFamily="heading" color="gray.100" fontSize="lg">{name}</Heading>
          <Text color="gray.200" numberOfLines={2}>{description}</Text>
        </VStack>
        <Icon
          as={Entypo}
          name="chevron-thin-right"
          color="gray.300"
        />
      </HStack>
    </TouchableOpacity>
  );
}

export default VideoCard;
