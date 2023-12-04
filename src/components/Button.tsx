import { Button as NativeBaseButton, type IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  name: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
};

function Button({ name, variant = 'solid', disabled = true, ...rest }: Props) {

  if (disabled && variant === 'solid') {
    return (
      <NativeBaseButton
        w="full"
        h="14"
        bg="gray.500"
        rounded="sm"
        opacity={0.5}
        _pressed={{
          bg: 'gray.500',
        }}
        {...rest}
      >
        <Text color="#FFF" fontFamily="heading" fontSize="sm">
          {name}
        </Text>
      </NativeBaseButton>
    )
  }

  return (
    <NativeBaseButton
      w="full"
      h="14"
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.700"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? 'gray.500' : 'green.500',
      }}
      {...rest}
    >
      <Text color={variant === 'outline' ? 'green.700' : '#FFF'} fontFamily="heading" fontSize="sm">
        {name}
      </Text>
    </NativeBaseButton>
  );
}

export default Button;
