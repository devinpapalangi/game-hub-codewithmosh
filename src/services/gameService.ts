import { Game } from "../types";
import APIClient from "./api-client";

export const gameService = new APIClient<Game>("/games");
