import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { GameQuery, Genre, Platform } from "./types";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [query, setQuery] = useState<GameQuery>({} as GameQuery);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const genreParams = urlParams.get("genre");
    if (genreParams) {
      const genre = JSON.parse(genreParams);
      setQuery((prev) => ({ ...prev, genre }));
    }

    const platformParams = urlParams.get("platform");
    if (platformParams) {
      const platform = JSON.parse(platformParams);
      setQuery({ ...query, platform });
    }

    const orderingParams = urlParams.get("ordering");
    if (orderingParams) {
      const ordering = JSON.parse(orderingParams);
      setQuery({ ...query, ordering });
    }

    const searchTextParams = urlParams.get("searchText");
    if (searchTextParams) {
      const searchText = JSON.parse(searchTextParams);
      setQuery({ ...query, searchText });
    }
  }, [query]);

  const onSelectGenre = (genre: Genre) => {
    setQuery({ ...query, genre });
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("genre", JSON.stringify(genre));
    window.history.pushState({}, "", `?${urlParams.toString()}`);
  };

  const onSelectedPlatform = (platform: Platform) => {
    setQuery({ ...query, platform });

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("platform", JSON.stringify(platform));
    window.history.pushState({}, "", `?${urlParams.toString()}`);
  };

  const onSelectedOrdering = (ordering: string) => {
    setQuery({ ...query, ordering });
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("ordering", JSON.stringify(ordering));
    window.history.pushState({}, "", `?${urlParams.toString()}`);
  };

  const onSearch = (searchText: string) => {
    setQuery({ ...query, searchText });
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchText", JSON.stringify(searchText));
    window.history.pushState({}, "", `?${urlParams.toString()}`);
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
            selectedGenre={query.genre}
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
                selectedPlatform={query.platform}
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
