import { create } from "zustand";
import { persist } from "zustand/middleware";
import { addFavRepo, removeFavRepo } from "../helpers/favsRepo";

export interface useRepoStoreProps {
  favsReposIds: number[];
  addFavRepo: (id: number) => void;
  removeFavRepo: (id: number) => void;
}

export const useRepoStore = create<useRepoStoreProps>()(
  persist(
    (set) => ({
      favsReposIds: [],
      addFavRepo: (id) => addFavRepo(id, set),
      removeFavRepo: (id) => removeFavRepo(id, set),
    }),
    { name: "favsRepos" }
  )
);
