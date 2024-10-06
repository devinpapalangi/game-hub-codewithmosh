import { Box, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Heading>Something went wrong</Heading>
    </Box>
  );
};

export default ErrorPage;
