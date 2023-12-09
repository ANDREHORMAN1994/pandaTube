import { useEffect, useState } from 'react';
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  Pressable,
  Icon,
  ScrollView,
  useToast,
} from 'native-base';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { type AuthRoutesNavigationProps } from '@routes/auth.routes';
// import { type AppRoutesNavigationProps } from '@routes/app.routes';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import Input from '@components/Input';
import EyeOpenSvg from '@assets/eye-open.svg';
import EyeCloseSvg from '@assets/eye-closed.svg';
import EmailSvg from '@assets/email.svg';
import Button from '@components/Button';
import { login } from '@utils/index';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const toast = useToast();
  const navigationAuth = useNavigation<AuthRoutesNavigationProps>();
  // const navigationApp = useNavigation<AppRoutesNavigationProps>();

  const redirect = async () => {
    navigationAuth.navigate('signUp');
  };

  const handleLogin = async () => {
    const result = await login({ email, password });
    if ('error' in result) {
      toast.closeAll();
      toast.show({
        title: 'Atenção',
        description: result.error,
        placement: 'top',
        bgColor: 'red.500',
      });
    } else {
      const { token, id } = result;
      await SecureStore.setItemAsync('token', token ?? '');
      await SecureStore.setItemAsync('userId', id ?? '');
      // navigationApp.navigate('home');
    }
  };

  const validationFields = () => {
    const emailRegex = /^[a-z0-9.\-_]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const valEmail = emailRegex.test(email);
    const valPassword = password.length >= 6;

    setDisabled(!(valEmail && valPassword));
  };

  useEffect(validationFields, [email, password]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Fundo do cinema"
          resizeMode="contain"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Viva uma emoção diferente todos os dias
          </Text>
        </Center>
        <Center w="80%" mx="auto">
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Acesse sua conta
          </Heading>

          <Input
            type="text"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text.trim())}
            value={email}
            InputLeftElement={<Icon as={<EmailSvg />} ml={5} />}
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            onChangeText={(text) => setPassword(text.trim())}
            value={password}
            InputLeftElement={
              <Pressable
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? (
                  <Icon as={<EyeOpenSvg />} ml={5} />
                ) : (
                  <Icon as={<EyeCloseSvg />} ml={5} />
                )}
              </Pressable>
            }
          />
          <Button name="Acessar" disabled={disabled} onPress={handleLogin} />
        </Center>
        <Center w="80%" mx="auto" mt="24">
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button name="Criar conta" variant="outline" onPress={redirect} />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignIn;
