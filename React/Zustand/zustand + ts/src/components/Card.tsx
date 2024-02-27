import { useRepoStore } from "../store/repoStore";
import { Repo } from "../types";

interface CardProps {
  repo: Repo;
  isFavorite: boolean;
}

export function Card({ repo, isFavorite }: CardProps) {
  const { removeFavRepo, addFavRepo } = useRepoStore();

  return (
    <div>
      <h1>{repo.name}</h1>
      {isFavorite ? (
        <button onClick={() => removeFavRepo(repo.id)}>Delete Favs</button>
      ) : (
        <button onClick={() => addFavRepo(repo.id)}>Like</button>
      )}
    </div>
  );
}
