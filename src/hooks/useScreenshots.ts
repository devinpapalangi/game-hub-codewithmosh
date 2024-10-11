import { useQuery } from "@tanstack/react-query";
import { screenshotsService } from "../services/screenshotsService";
import { GAME_CACHE_STALE_TIME, SCREENSHOTS_CACHE_KEY } from "./contants";

const useScreenshots = (slug: string) =>
  useQuery({
    queryKey: [SCREENSHOTS_CACHE_KEY, slug],
    queryFn: () => screenshotsService(slug).getAll(),
    staleTime: GAME_CACHE_STALE_TIME,
  });

export default useScreenshots;
