export interface DataResponse<T> {
  count: number;
  next: string | null;
  previous: string;
  results: T[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: string;
  searchText: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  year_start: number;
  year_end: number;
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
