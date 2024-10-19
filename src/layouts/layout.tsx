import { Outlet } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Text>Test CI CD</Text>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
