import { Genre } from "../types";
import APIClient from "./api-client";

export const genreService = new APIClient<Genre>("/genres");
