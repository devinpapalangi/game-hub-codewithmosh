export interface GamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}
