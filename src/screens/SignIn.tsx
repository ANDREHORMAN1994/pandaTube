import { VStack, Image } from 'native-base';
import BackgroundImg from '@assets/background.png';

function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Fundo do cinema"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  )
}

export default SignIn;
