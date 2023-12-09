import { useEffect, useRef, useState } from 'react';
import { Center, ScrollView, VStack, Skeleton, Text, Heading, useToast } from 'native-base';
import Title from '@components/Title';
import UserPhoto from '@components/UserPhoto';
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import * as SecureStore from 'expo-secure-store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Input from '@components/Input';
import Button from '@components/Button';
import { getUserById, updateUserById } from '@utils/index';
import { type IUser } from 'src/types';
import PhotoDefaultPng from '../assets/userPhotoDefault.png';

const PHOTO_SIZE = 33;

type FormProps = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
};

const schema = yup.object({
  name: yup.string().required('Campo obrigatório! Informe o seu nome'),
  email: yup
    .string()
    .required('Campo obrigatório! Informe o seu e-mail')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('Campo obrigatório! Informe a sua senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  newPassword: yup
    .string()
    .required('Campo obrigatório! Confirme a sua senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .oneOf([yup.ref('password'), ''], 'As senhas não são iguais'),
});

function Profile() {
  const [imgPerfil, setImgPerfil] = useState('');
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  const showToast = useRef((message: string) => {
    toast.closeAll();
    toast.show({
      title: 'Atenção',
      description: message,
      placement: 'top',
      bgColor: 'red.500',
    });
  });

  const getUserId = async () => {
    const userId = await SecureStore.getItemAsync('userId');
    return userId;
  };

  const getToken = async () => {
    const token = await SecureStore.getItemAsync('token');
    return token;
  };

  useEffect(() => {
    const request = async () => {
      const token = (await getToken()) ?? '';
      const id = (await getUserId()) ?? '';
      // if (!token) return navigation.navigate('home');
      // if (!id) return showToast.current('Usuário não encontrado');
      const userInfo = await getUserById(id, token);
      if ('error' in userInfo) {
        showToast.current(userInfo.error);
      } else {
        setUser(userInfo);
      }
    };

    request();
  }, []);

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
      showToast.current(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validationFields = async ({ name, email, newPassword }: FormProps) => {
    const infos = { name, email, password: newPassword };
    const token = (await getToken()) ?? '';
    const id = user?.id ?? '';
    const result = await updateUserById(id, infos, token);
    if ('error' in result) {
      toast.closeAll();
      toast.show({
        title: 'Atenção',
        description: result.error,
        placement: 'top',
        bgColor: 'red.500',
      });
    } else {
      toast.closeAll();
      toast.show({
        title: 'Sucesso',
        description: 'Usuário atualizado com sucesso!',
        placement: 'top',
        bgColor: 'green.500',
      });
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
              source={ imgPerfil ? { uri: imgPerfil } : PhotoDefaultPng}
              defaultSource={PhotoDefaultPng}
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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                placeholder="Nome"
                onChangeText={onChange}
                value={value || user?.name}
                messageError={errors.name?.message}
                bg="gray.600"
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value || user?.email}
                messageError={errors.email?.message}
                bg="gray.600"
              />
            )}
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading fontSize="md" fontFamily="heading" color="gray.200" mb={2}>
            Alterar senha
          </Heading>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Senha antiga"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                messageError={errors.password?.message}
                bg="gray.600"
              />
            )}
          />
          <Controller
            control={control}
            name="newPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Nova senha"
                onChangeText={onChange}
                value={value}
                messageError={errors.newPassword?.message}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={handleSubmit(validationFields)}
                bg="gray.600"
              />
            )}
          />
          <Button name="Atualizar" mt={4} onPress={handleSubmit(validationFields)} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}

export default Profile;
