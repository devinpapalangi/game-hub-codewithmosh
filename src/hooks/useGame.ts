import { GAME_CACHE_KEY, GAME_CACHE_STALE_TIME } from "./contants";
import { gameService } from "../services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug: string) =>
  useQuery({
    queryKey: [GAME_CACHE_KEY, slug],
    queryFn: () => gameService.get(slug),
    staleTime: GAME_CACHE_STALE_TIME,
  });

export default useGame;
