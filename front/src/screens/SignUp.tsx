import { VStack, Image, Center, Text, Heading, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { type AuthRoutesNavigationProps } from '@routes/auth.routes';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import Input from '@components/Input';
import Button from '@components/Button';

type FormProps = {
  name: string;
  email: string;
  password: string;
  newPassword: string;
};

const schema = yup.object({
  name: yup.string()
    .required('Campo obrigatório! Informe o seu nome'),
  email: yup.string()
    .required('Campo obrigatório! Informe o seu e-mail')
    .email('E-mail inválido'),
  password: yup.string()
    .required('Campo obrigatório! Informe a sua senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  newPassword: yup.string()
    .required('Campo obrigatório! Confirme a sua senha')
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .oneOf([yup.ref('password'), ''], 'As senhas não são iguais'),
});

function SignUp() {
  const navigation = useNavigation<AuthRoutesNavigationProps>();
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      newPassword: '',
    },
    resolver: yupResolver(schema),
  });


  const redirect = () => {
    navigation.goBack();
  };

  const validationFields = (data: FormProps) => {
    console.log(data);
    // if (!name || !email || !password || !newPassword) {
    //   return Alert.alert('Preencha todos os campos');
    // }
    // if (password !== newPassword) {
    //   return Alert.alert('As senhas não são iguais');
    // }
    // return Alert.alert('Cadastro realizado com sucesso');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                type="text"
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                messageError={errors.name?.message}
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
                value={value}
                messageError={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                messageError={errors.password?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="newPassword"
            render={({ field: { onChange, value } }) => (
              <Input
                type="password"
                placeholder="Confirme a senha"
                onChangeText={onChange}
                value={value}
                messageError={errors.newPassword?.message}
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={handleSubmit(validationFields)}
              />
            )}
          />

          <Button
            name="Criar e acessar"
            onPress={handleSubmit(validationFields)}
            disabled={!isValid}
          />
        </Center>
        <Center w="80%" mx="auto" mt={16}>
          <Button name="Voltar para o login" variant="outline" onPress={redirect} />
        </Center>
      </VStack>
    </ScrollView>
  );
}

export default SignUp;
