// Importamos
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

export function IcecreamView() {
  const [value, setValue] = useState(1);

  const numOfIcecream = useAppSelector((state) => state.iceCream.numOfIcecream);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered(""))}>Order Icecream</button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Icecream
      </button>
    </div>
  );
}
