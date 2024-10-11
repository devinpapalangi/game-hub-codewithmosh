export interface DataResponse<T> {
  count: number;
  next: string | null;
  previous: string;
  results: T[];
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
export interface GameTrailers {
  id: number;
  name: string;
  preview: string;
  data: {
    408: string;
    max: string;
  };
}

export interface GameScreenshots {
  id: number;
  image: string;
  width: number;
  height: number;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
}

export interface Platform {
  platform: EsrbRating;
  released_at: string;
  requirements: Requirements;
}

export interface Requirements {
  minimum: string;
  recommended: string;
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
