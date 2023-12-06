import { Text, Pressable, type IPressableProps } from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActive?: boolean;
};

function GroupCategories({ name, isActive = false, ...rest }: Props) {
  return (
    <Pressable
      w={24}
      h={10}
      mr={3}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...rest}
    >
      <Text
        color={isActive ? "green.500" : "gray.200"}
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {name}
      </Text>
    </Pressable>
  );
}

export default GroupCategories;
