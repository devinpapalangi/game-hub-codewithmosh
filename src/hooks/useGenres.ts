import { useQuery } from "@tanstack/react-query";
import { GENRE_CACHE_KEY, GENRE_CACHE_STALE_TIME } from "./contants";
import { genreService } from "../services/genreService";
import { DataResponse, Genre } from "../types";

const useGenres = () =>
  useQuery<DataResponse<Genre>>({
    queryKey: [GENRE_CACHE_KEY],
    queryFn: genreService.getAll,
    staleTime: GENRE_CACHE_STALE_TIME,
  });

export default useGenres;
