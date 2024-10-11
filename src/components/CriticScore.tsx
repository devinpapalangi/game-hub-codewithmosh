import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score?: number;
}
const CriticScore: React.FC<Props> = ({ score }) => {
  if (!score) return null;
  return (
    <Badge
      paddingX={2}
      fontSize={"14px"}
      borderRadius={"4px"}
      colorScheme={score > 75 ? "green" : score > 60 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
