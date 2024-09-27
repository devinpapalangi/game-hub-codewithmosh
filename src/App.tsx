import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameQuery, Genre, Platform } from "./types";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [query, setQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectGenre = (genre: Genre) => {
    setQuery({ ...query, genreId: genre.id });
  };

  const onSelectedPlatform = (platform: Platform) => {
    setQuery({ ...query, platformId: platform.id });
  };

  const onSelectedOrdering = (ordering: string) => {
    setQuery({ ...query, ordering });
  };

  const onSearch = (searchText: string) => {
    setQuery({ ...query, searchText });
  };
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
        <Navbar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenre={query.genreId}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading query={query} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectedPlatform={onSelectedPlatform}
                selectedPlatform={query.platformId}
              />
            </Box>
            <SortSelector
              onSelectSortOrder={onSelectedOrdering}
              selectedSortOrder={query.ordering}
            />
          </Flex>
        </Box>
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
