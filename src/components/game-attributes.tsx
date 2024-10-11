import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItems from "./definition-item";
import { Game } from "../types";
interface Props {
  game?: Game;
}

const GameAttributes = ({ game }: Props) => {
  if (!game) return null;
  const shownAttributes = [
    {
      term: "Platforms",
      element: game?.parent_platforms.map((platform) => (
        <Text>{platform.platform.name}</Text>
      )),
    },
    {
      term: "Metacritic",
      element: <CriticScore score={game?.metacritic} />,
    },
    {
      term: "Genres",
      element: game?.genres.map((genre) => <Text>{genre.name}</Text>),
    },
    {
      term: "Publishers",
      element: game?.publishers.map((publisher) => (
        <Text>{publisher.name}</Text>
      )),
    },
  ];
  return (
    <SimpleGrid columns={2} as="dl">
      {shownAttributes.map(({ term, element }) => (
        <DefinitionItems key={term} term={term}>
          {element}
        </DefinitionItems>
      ))}
    </SimpleGrid>
  );
};

export default GameAttributes;
