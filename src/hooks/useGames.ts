import { Game } from "../types";
import useData from "./useData";

const useGames = (selectedGenre: string | null) =>
  useData<Game>("/games", {
    params: {
      genres: selectedGenre,
    },
  });

export default useGames;
