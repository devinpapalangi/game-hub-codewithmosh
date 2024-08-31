import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { Games, GamesResponse } from "./../types";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller: AbortController = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default useGames;
