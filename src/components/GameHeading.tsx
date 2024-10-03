import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQuery from "../hooks/useGameQuery";

const GameHeading = () => {
  const { gameQuery } = useGameQuery();
  const platformName = usePlatform(gameQuery.platformId)?.name;
  const genreName = useGenre(gameQuery.genreId)?.name;

  const heading = `${genreName || ""} ${platformName || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
