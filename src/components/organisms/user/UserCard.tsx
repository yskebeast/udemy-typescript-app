import { Image } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onClick: (id:number) => void
};

export const UserCard: VFC<Props> = memo((props) => {
  const {imageUrl,userName,fullName, onClick, id} = props;
  return (
    <Box
      width="260px"
      height="260px"
      bg="white"
      borderRadius="10"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="md" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
