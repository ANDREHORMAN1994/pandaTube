import { useEffect, useState } from 'react';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import Title from '@components/Title';
import UserPhoto from '@components/UserPhoto';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import Input from '@components/Input';
import Button from '@components/Button';

const PHOTO_SIZE = 33;

function Profile() {
  const [imgPerfil, setImgPerfil] = useState('http://github.com/ANDREHORMAN1994.png');
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  const handlePhotoSelect = async () => {
    try {
      setIsLoading(true);
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
        allowsEditing: true,
      });

      if (!canceled) {
        const { uri } = assets[0];

        const info = await FileSystem.getInfoAsync(uri);

        if (info?.exists && (Number(info.size) / 1024 / 1024) > 5) {
          throw new Error('A imagem não pode ser maior que 5MB');
        }

        setImgPerfil(uri || imgPerfil);
      }
    } catch (error: any) {
      toast.closeAll();
      toast.show({
        title: 'Atenção',
        description: error.message,
        placement: 'top',
        bgColor: 'red.500',
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              source={{ uri: imgPerfil }}
              size={PHOTO_SIZE}
              alt="Foto do usuário"
              mr={0}
            />
          )}
          <TouchableOpacity onPress={handlePhotoSelect}>
            <Text color="green.500" fontSize="md" fontWeight="bold" mt={2} mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="gray.600" />
          <Input placeholder="E-mail" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={2}>
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
