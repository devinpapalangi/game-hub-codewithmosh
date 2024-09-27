import { Platform } from "../types";
import APIClient from "./api-client";

export const platformService = new APIClient<Platform>("/platforms");
