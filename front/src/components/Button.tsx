import { Button as NativeBaseButton, type IButtonProps, Text, HStack } from 'native-base';
import { type ReactElement } from 'react';
import { type Svg } from 'react-native-svg';

type Props = IButtonProps & {
  name: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
  icon?: ReactElement<typeof Svg> | null;
};

function Button({ name, variant = 'solid', disabled = false, icon = null, ...rest }: Props) {

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
      <HStack justifyContent="center" alignItems="center">
        <Text color={variant === 'outline' ? 'green.700' : '#FFF'} fontFamily="heading" fontSize="sm" mr={icon ? 2 : 0}>
          {name}
        </Text>
        {icon && icon}
      </HStack>
    </NativeBaseButton>
  );
}

export default Button;
