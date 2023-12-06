import { Spinner, Center } from 'native-base';

function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner
        accessibilityLabel="Loading"
        color="green.500"
        size="lg"
      />
    </Center>
  )
}

export default Loading;
