import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const GameCardContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box
      width={"100%"}
      borderRadius={"10px"}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
