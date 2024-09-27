import React from "react";
import { GameQuery } from "../types";
import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  query: GameQuery;
}
const GameHeading: React.FC<Props> = ({ query }) => {
  const platformName = usePlatform(query.platformId)?.name;
  const genreName = useGenre(query.genreId)?.name;

  const heading = `${genreName || ""} ${platformName || ""} Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
