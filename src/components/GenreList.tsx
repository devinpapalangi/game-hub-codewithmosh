import { Heading, List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreListItem from "./GenreListItem";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 19 }, (_, i) => i);
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {error && <li>{error.message}</li>}
        {isLoading &&
          skeletons.map((index) => <GenreListSkeleton key={index} />)}
        {data?.results.map((data) => (
          <GenreListItem key={data.id} genre={data} />
        ))}
      </List>
    </>
  );
};

export default GenreList;
