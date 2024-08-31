import { CanceledError } from "axios";
import apiClient from "../services/api-client";
import { Game, GamesResponse } from "./../types";
import { useEffect, useState } from "react";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    setIsLoading(true);

    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error, isLoading };
};

export default useGames;
