import { HStack, Heading, Text, VStack } from 'native-base';

type Props = {
  name: string;
  description: string;
  hour: string;
}

function HistoryCard({ name, description, hour }: Props) {
  return (
    <HStack
      bg="gray.500"
      w="full"
      p={4}
      mb={3}
      rounded="md"
      alignItems="center"
    >
      <VStack flex={1}>
        <Text color="gray.200" mr={2} numberOfLines={1}>{description}</Text>
        <Heading
          color="gray.100"
          fontSize="lg"
          fontFamily="heading"
          textTransform="capitalize"
        >
          {name}
        </Heading>
      </VStack>
      <Text color="gray.300" ml="auto">{hour}</Text>
    </HStack>
  )
}

export default HistoryCard;
