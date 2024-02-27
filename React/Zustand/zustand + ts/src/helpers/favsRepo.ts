import { useRepoStoreProps } from "../store/repoStore";

export const addFavRepo = (
  id: number,
  set: (state: (prevState: useRepoStoreProps) => useRepoStoreProps) => void
) => {
  set((state: useRepoStoreProps) => ({
    ...state,
    favsReposIds: [...state.favsReposIds, id],
  }));
};

export const removeFavRepo = (
  id: number,
  set: (state: (prevState: useRepoStoreProps) => useRepoStoreProps) => void
) => {
  set((state: useRepoStoreProps) => ({
    ...state,
    favsReposIds: state.favsReposIds.filter((repoId) => repoId != id),
  }));
};
