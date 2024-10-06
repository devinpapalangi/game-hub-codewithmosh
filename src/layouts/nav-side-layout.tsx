import { Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const NavSideLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default NavSideLayout;
