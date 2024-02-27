import { useFetchRepos } from "./hooks/useRepos";
import { Card } from "./components/Card";
import { Repo } from "./types";
import { useRepoStore } from "./store/repoStore";

export function App() {
  const { isLoading, data } = useFetchRepos();
  const { favsReposIds } = useRepoStore();

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !data && <p>No data.</p>}
      {data?.map((repo: Repo) => (
        <Card
          key={repo.id}
          repo={repo}
          isFavorite={favsReposIds.includes(repo.id)}
        />
      ))}
    </main>
  );
}
