import React from "react";
import { GameQuery } from "../types";
import { Heading } from "@chakra-ui/react";

interface Props {
  query: GameQuery;
}
const GameHeading: React.FC<Props> = ({ query }) => {
  const heading = `${query.platform?.name || ""} ${
    query.genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
