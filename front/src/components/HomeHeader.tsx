import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UserPhoto from './UserPhoto';

function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        size={16}
        source={{ uri: 'https://github.com/ANDREHORMAN1994.png' }}
        alt="Foto do usuário"
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading fontFamily="heading" color="gray.100" fontSize="md">
          André Horman
        </Heading>
      </VStack>

      <TouchableOpacity>
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
