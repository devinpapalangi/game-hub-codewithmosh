import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { GameQuery, Genre, Platform } from "./types";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

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
          <GenreList
            selectedGenre={query.genre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectedPlatform={onSelectedPlatform}
            selectedPlatform={query.platform}
          />
          <SortSelector />
        </HStack>

        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
}

export default App;
