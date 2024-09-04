import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreListSkeleton from "./GenreListSkeleton";
import React from "react";
import { Genre } from "../types";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList: React.FC<Props> = ({ onSelectGenre, selectedGenre }) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 19 }, (_, i) => i);
  return (
    <List>
      {error && <li>{error}</li>}
      {isLoading && skeletons.map((index) => <GenreListSkeleton key={index} />)}
      {data.map((data) => (
        <GenreListItem
          key={data.id}
          genre={data}
          selected={selectedGenre?.id === data.id}
          onSelectGenre={onSelectGenre}
        />
      ))}
    </List>
  );
};

export default GenreList;
