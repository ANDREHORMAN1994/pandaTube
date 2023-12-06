import { type IInputProps, Input as NativeBaseInput, FormControl } from 'native-base';

type Props = IInputProps & {
  messageError?: string | null;
}

function Input({ messageError = null, isInvalid, ...rest }: Props) {
  const invalid = !!messageError || isInvalid;
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        color="#FFF"
        placeholderTextColor="gray.300"
        fontSize="md"
        h={14}
        px={4}
        borderRadius="sm"
        borderWidth={0}
        fontFamily="body"
        isInvalid={invalid}
        _invalid={{
          bg: 'gray.600',
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bg: 'gray.600',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{messageError}</FormControl.ErrorMessage>
    </FormControl>
  )
}

export default Input;
