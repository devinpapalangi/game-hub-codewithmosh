import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import useGames from "../hooks/useGames";
import { GameQuery } from "../types";

interface Props {
  query: GameQuery;
}

const GameGrid: React.FC<Props> = ({ query }) => {
  const { data, error, isLoading } = useGames(query);
  const skeletons = Array.from({ length: 12 }, (_, i) => i);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
        padding={"10px"}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : data.map((data) => (
              <GameCardContainer key={data.id}>
                <GameCard key={data.id} game={data} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
