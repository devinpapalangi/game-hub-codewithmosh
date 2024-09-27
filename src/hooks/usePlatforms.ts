import { useQuery } from "@tanstack/react-query";
import { DataResponse, Platform } from "../types";
import { PLATFORM_CACHE_KEY, PLATFORM_CACHE_STALE_TIME } from "./contants";
import { platformService } from "../services/platformService";

const usePlatforms = () => {
  return useQuery<DataResponse<Platform>>({
    queryKey: [PLATFORM_CACHE_KEY],
    queryFn: platformService.getAll,
    staleTime: PLATFORM_CACHE_STALE_TIME,
  });
};

export default usePlatforms;
