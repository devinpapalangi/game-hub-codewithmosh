import { DataResponse, Game } from "../types";
import { GAME_CACHE_KEY, GAME_CACHE_STALE_TIME } from "./contants";
import { gameService } from "../services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGame = (gameId: number) =>
  useQuery<DataResponse<Game>>({
    queryKey: [GAME_CACHE_KEY, gameId],
    queryFn: () => gameService.get({}, gameId),
    staleTime: GAME_CACHE_STALE_TIME,
  });

export default useGame;
