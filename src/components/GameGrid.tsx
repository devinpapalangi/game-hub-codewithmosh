import React from "react";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

import useGames from "../hooks/useGames";
import { GameQuery } from "../types";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  query: GameQuery;
}

const GameGrid: React.FC<Props> = ({ query }) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(query);
  const skeletons = Array.from({ length: 12 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
      endMessage={<Text>No more games</Text>}
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={6}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : data?.pages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {page.results.map((game, index) => (
                    <GameCardContainer key={index}>
                      <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                  ))}
                </React.Fragment>
              );
            })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
