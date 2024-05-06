import { useSelector, useDispatch } from "react-redux"
//IMPORTAMOS las actions que querramos ejecutar
import { ordered, restocked } from './cakeSlice'

export function CakeView() {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)

    //useDispatch sirve para ejecutar un action hacia un slice
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            {/* Dispatcheamos los actions al hacer click*/}
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
        </div>
    )
}