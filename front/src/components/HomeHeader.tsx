import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useContext } from 'react';
import { type IUser } from 'src/types';
import UserPhoto from './UserPhoto';
import { AuthContext } from '../context/Provider';
import PhotoDefaultPng from '../assets/userPhotoDefault.png';

type Props = {
  user: IUser | null;
  setIsAuth: (value: boolean) => void;
};

function HomeHeader({ user, setIsAuth }: Props) {
  const { imgPerfil } = useContext(AuthContext);

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={imgPerfil ? { uri: imgPerfil } : PhotoDefaultPng}
        defaultSource={PhotoDefaultPng}
        alt="Foto do usuário"
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading fontFamily="heading" color="gray.100" fontSize="md">
          {user?.name ?? 'Usuário'}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={() => setIsAuth(false)}>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  );
}

export default HomeHeader;
