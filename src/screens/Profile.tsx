import { useEffect, useState } from 'react';
import { Center, ScrollView, VStack, Skeleton, Text, Heading } from 'native-base';
import Title from '@components/Title';
import UserPhoto from '@components/UserPhoto';
import { TouchableOpacity } from 'react-native';
import Input from '@components/Input';
import Button from '@components/Button';

const PHOTO_SIZE = 33;

function Profile() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => setIsLoading(true);
  }, []);

  return (
    <VStack flex={1}>
      <Title title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {isLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.600"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: 'http://github.com/ANDREHORMAN1994.png' }}
              size={PHOTO_SIZE}
              alt="Foto do usuário"
              mr={0}
            />
          )}
          <TouchableOpacity>
            <Text color="green.500" fontSize="md" fontWeight="bold" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading fontSize="md" color="gray.200" mb={2}>
            Alterar senha
          </Heading>
          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />
          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />
          <Button name="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}

export default Profile;
