import { Center, Heading } from 'native-base';

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <Center
      bg="gray.600"
      pt={16}
      pb={6}
      w="full"
    >
      <Heading
        color="gray.100"
        fontSize="xl"
        fontFamily="heading"
      >
        {title}
      </Heading>
    </Center>
  )
}

export default Title;
