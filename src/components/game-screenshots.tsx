import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  slug?: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data, isLoading, error } = useScreenshots(slug!);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image
          src={screenshot.image}
          alt={screenshot.image}
          key={screenshot.id}
          objectFit="cover"
          width={screenshot.width}
          height={screenshot.height}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
