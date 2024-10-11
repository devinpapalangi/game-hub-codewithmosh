import { GameTrailers } from "../types";
import APIClient from "./api-client";

export const trailerService = (slug: string) =>
  new APIClient<GameTrailers>(`/games/${slug}/movies`);
