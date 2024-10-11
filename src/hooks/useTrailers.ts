import { trailerService } from "../services/trailerService";
import { GAME_CACHE_STALE_TIME, TRAILERS_CACHE_KEY } from "./contants";
import { useQuery } from "@tanstack/react-query";

const useTrailers = (slug: string) =>
  useQuery({
    queryKey: [TRAILERS_CACHE_KEY, slug],
    queryFn: () => trailerService(slug).getAll(),
    staleTime: GAME_CACHE_STALE_TIME,
  });

export default useTrailers;
