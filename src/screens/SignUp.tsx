import { useState } from 'react';
import { Alert } from 'react-native';
import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import Input from '@components/Input';
import Button from '@components/Button';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const validationFields = () => {
    if (!name || !email || !password || !newPassword) {
      return Alert.alert('Preencha todos os campos');
    }
    if (password !== newPassword) {
      return Alert.alert('As senhas não são iguais');
    }
    return Alert.alert('Cadastro realizado com sucesso');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700">
        <Image
          source={BackgroundImg}
          alt="Fundo do cinema"
          resizeMode="contain"
          position="absolute"
        />
        <Center mt={24} mb={16}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Viva uma emoção diferente todos os dias
          </Text>
        </Center>
        <Center w="80%" mx="auto">
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Crie sua conta
          </Heading>

          <Input
            type="text"
            placeholder="Nome"
            onChangeText={(text) => setName(text.trim())}
            value={name}
          />
          <Input
            type="text"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text.trim())}
            value={email}
          />
          <Input
            type="password"
            placeholder="Senha"
            onChangeText={(text) => setPassword(text.trim())}
            value={password}
            secureTextEntry
          />
          <Input
            type="password"
            placeholder="Confirme a senha"
            onChangeText={(text) => setNewPassword(text.trim())}
            value={newPassword}
            secureTextEntry
          />

          <Button name="Criar e acessar" onPress={validationFields} />
        </Center>
        <Center w="80%" mx="auto" mt={16}>
          <Button name="Voltar para o login" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignUp;
