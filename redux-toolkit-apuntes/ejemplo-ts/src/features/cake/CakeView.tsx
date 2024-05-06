// En lugar de esto
// import { useSelector, useDispatch } from "react-redux"

// Importamos
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

export function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);

  //useDispatch sirve para ejecutar un action hacia un slice
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered(""))}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </div>
  );
}
