import { useInfiniteQuery } from "@tanstack/react-query";
import { DataResponse, Game, GameQuery } from "../types";
import { GAME_CACHE_KEY, GAME_CACHE_STALE_TIME } from "./contants";
import { gameService } from "../services/gameService";

const useGames = (query: GameQuery) =>
  useInfiniteQuery<DataResponse<Game>>({
    queryKey: [GAME_CACHE_KEY, query],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      gameService.getAll({
        params: {
          genres: query.genreId,
          platforms: query.platformId,
          ordering: query.ordering,
          search: query.searchText,
          page: pageParam,
        },
      }),
    staleTime: GAME_CACHE_STALE_TIME,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
