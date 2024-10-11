import React from "react";
import { Game } from "../types";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import Emoji from "./Emoji";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard: React.FC<Props> = ({ game }) => {
  const navigate = useNavigate();

  const onSelectCard = () => navigate(`/games/${game.slug}`);

  return (
    <Card onClick={onSelectCard}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"} noOfLines={1}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
