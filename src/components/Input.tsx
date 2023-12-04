import { type IInputProps, Input as NativeBaseInput } from 'native-base';

function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      color="#FFF"
      placeholderTextColor="gray.300"
      fontSize="md"
      h={14}
      px={4}
      mb={4}
      borderRadius="sm"
      borderWidth={0}
      fontFamily="body"
      _focus={{
        bg: 'gray.600',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    />
  )
}

export default Input;
