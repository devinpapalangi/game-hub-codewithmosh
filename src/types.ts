export interface GamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

export interface GenresResponse {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
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
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
