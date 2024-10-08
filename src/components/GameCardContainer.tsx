import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}
const GameCardContainer: React.FC<Props> = ({ children }) => {
  return (
    <Box width={"100%"} borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
