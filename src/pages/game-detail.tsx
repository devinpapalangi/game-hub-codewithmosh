import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/expandable-text";
import GameAttributes from "../components/game-attributes";
import useGame from "../hooks/useGame";
import GameTrailers from "../components/game-trailer";
import GameScreenshots from "../components/game-screenshots";

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText text={game?.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailers slug={slug} />
        <GameScreenshots slug={slug} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetail;
