import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import React from "react";
import { getCroppedImageUrl } from "../services/image-url";
import { Genre } from "../types";

interface Props {
  genre: Genre;
  onSelectedGenre: (id: Genre) => void;
}
const GenreListItem: React.FC<Props> = ({ genre, onSelectedGenre }) => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Image
          boxSize="32px"
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        />
        <Button
          onClick={() => onSelectedGenre(genre)}
          fontSize={"lg"}
          variant={"link"}
          noOfLines={1}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
