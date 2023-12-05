import { Image, type IImageProps } from 'native-base';

type Props = IImageProps & {
  size: number;
};

function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
    w={size}
    h={size}
    mr={5}
    rounded="full"
    borderWidth={2}
    borderColor="gray.400"
    {...rest}
    />
  )
}

export default UserPhoto;
