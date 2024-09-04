import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useEffect, useState } from "react";
import { Genre } from "./types";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const genreParams = urlParams.get("genre");
    if (genreParams) {
      const genre = JSON.parse(genreParams);
      setSelectedGenre(genre);
    }
  }, [selectedGenre]);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("genre", JSON.stringify(genre));
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
            selectedGenre={selectedGenre}
            onSelectGenre={onSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
