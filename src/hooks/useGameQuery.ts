import { create } from "zustand";
import { GameQuery } from "../types";

interface GameQueryStore {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGameQuery: (query) => set({ gameQuery: query }),
}));

export default useGameQuery;
