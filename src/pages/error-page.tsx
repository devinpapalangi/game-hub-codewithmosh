import { Box, Heading, Stack } from "@chakra-ui/react";
import errorAnimation from "../assets/Animation - 1728239813082.json";
import Lottie from "lottie-react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Stack>
        {isRouteErrorResponse(error) ? (
          <Heading>{error.data.message}</Heading>
        ) : (
          <Heading>Oops! Something went wrong</Heading>
        )}

        <Box>
          <Lottie
            style={{ height: "400px", width: "400px" }}
            loop={true}
            animationData={errorAnimation}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
