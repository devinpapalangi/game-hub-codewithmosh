import { GameScreenshots } from "../types";
import APIClient from "./api-client";

export const screenshotsService = (slug: string) =>
  new APIClient<GameScreenshots>(`/games/${slug}/screenshots`);
