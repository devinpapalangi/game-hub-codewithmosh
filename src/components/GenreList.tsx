import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../types";

const GenreList: React.FC = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 19 }, (_, i) => i);

  const onSelectedGenre = (genre: Genre) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set("genre", genre.id.toString());

    const newPath = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, "", newPath);
    window.location.reload();
  };
  return (
    <List>
      {error && <li>{error}</li>}
      {isLoading && skeletons.map((index) => <GenreListSkeleton key={index} />)}
      {data.map((data) => (
        <GenreListItem
          key={data.id}
          genre={data}
          onSelectedGenre={onSelectedGenre}
        />
      ))}
    </List>
  );
};

export default GenreList;
