import { useQuery } from "@tanstack/react-query";
import { api } from "../api/github";

async function fetchRepos() {
  const { data } = await api.get("/users/nahuelguirao/repos");
  return data;
}

export function useFetchRepos() {
  return useQuery({
    queryKey: ["repos"],
    queryFn: fetchRepos,
  });
}
