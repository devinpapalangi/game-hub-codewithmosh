import ms from "ms";

export const GAME_CACHE_KEY = "games";
export const GENRE_CACHE_KEY = "genres";
export const PLATFORM_CACHE_KEY = "platforms";

export const GENRE_CACHE_STALE_TIME = ms("24h");
export const GAME_CACHE_STALE_TIME = ms("24h");
export const PLATFORM_CACHE_STALE_TIME = ms("24h");
