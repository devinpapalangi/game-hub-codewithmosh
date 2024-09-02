import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <List>
      {error && <li>{error}</li>}
      {isLoading && <li>Loading...</li>}
      {data.map((data) => (
        <ListItem key={data.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(data.image_background)}
            />
            <Text fontSize={"lg"}>{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
