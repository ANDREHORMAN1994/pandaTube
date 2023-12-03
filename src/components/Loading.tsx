import { Spinner, Center } from 'native-base';

function Loading() {
  return (
    <Center flex={1} bg="gray.700">
      <Spinner accessibilityLabel="Loading" color="green.500" />
    </Center>
  )
}

export default Loading;
