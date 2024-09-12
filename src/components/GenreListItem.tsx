import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import React from "react";
import { getCroppedImageUrl } from "../services/image-url";
import { Genre } from "../types";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selected: boolean;
}
const GenreListItem: React.FC<Props> = ({ genre, onSelectGenre, selected }) => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <Image
          boxSize="32px"
          objectFit={"cover"}
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
        />
        <Button
          fontWeight={selected ? "bold" : "normal"}
          variant={"link"}
          fontSize={"lg"}
          onClick={() => onSelectGenre(genre)}
          whiteSpace={"normal"}
          textAlign={"left"}
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreListItem;
