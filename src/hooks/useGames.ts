import { Game, GameQuery } from "../types";
import useData from "./useData";

const useGames = (query: GameQuery) =>
  useData<Game>(
    "/games",
    { params: { genre: query.genre?.id, platform: query.platform?.id } },
    [query.genre?.id, query.platform?.id]
  );

export default useGames;
