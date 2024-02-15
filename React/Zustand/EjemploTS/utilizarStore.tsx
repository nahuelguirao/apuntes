const useCounterStore = (a?, b?) => {}; //IGNORAR ESTO
const useEffect = (a?, b?) => {};
const shallow = "";
//Importaria el store desde el archivo

export function App() {
  const { title, count, posts }: any = useCounterStore(
    (state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );

  const { increment, getPost, multiply }: any = useCounterStore();

  useEffect(() => {
    getPost();
  }, []);

  return; //uso el JSX
}
