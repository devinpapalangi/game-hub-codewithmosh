import { ListItem, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { getCroppedImageUrl } from "../services/image-url";
import { Genre } from "../types";

interface Props {
  genre: Genre;
}
const GenreListItem: React.FC<Props> = ({ genre }) => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        />
        <Text fontSize={"lg"}>{genre.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
