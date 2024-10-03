import { ListItem, HStack, Image, Button } from "@chakra-ui/react";
import React from "react";
import { getCroppedImageUrl } from "../services/image-url";
import { Genre } from "../types";
import useGameQuery from "../hooks/useGameQuery";

interface Props {
  genre: Genre;
}

const GenreListItem = ({ genre }: Props) => {
  const { gameQuery, setGameQuery } = useGameQuery();

  const selected = gameQuery.genreId === genre.id;
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
          onClick={() => setGameQuery({ ...gameQuery, genreId: genre.id })}
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
