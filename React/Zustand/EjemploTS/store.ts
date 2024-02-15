import { create, SetState } from "zustand";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface useCounterStoreProps {
  title: string;
  count: number;
  posts: Post[];
  increment: (val: number) => void;
  getPost: () => Promise<void>;
  multiply: (val: number) => void;
}

const increment = (
  val: number,
  set: (
    state: (prevState: useCounterStoreProps) => useCounterStoreProps
  ) => void
) => {
  set((state) => ({
    ...state,
    count: state.count + val,
  }));
};

const fetching = async (set: SetState<useCounterStoreProps>) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  set((state: useCounterStoreProps) => ({
    posts: [...state.posts, ...data],
  }));
};

const multiply = (
  val: number,
  get: () => useCounterStoreProps,
  set: (state: { count: number }) => void
) => {
  const { count } = get();
  set({ count: count * val });
};

//Genero un store global con create
export const useCounterStore = create<useCounterStoreProps>((set, get) => ({
  //Create nos brinda 2 funciones set y get (para setear y obtener)
  title: "Hello world!",
  count: 10,
  posts: [],
  increment: (val) => increment(val, set),
  getPost: () => fetching(set),
  multiply: (val) => multiply(val, get, set),
}));
