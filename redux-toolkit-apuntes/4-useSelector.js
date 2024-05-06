import { useSelector } from "react-redux"

export function CakeView() {
    //Use selector nos permite acceder al estado general
    //nos lo trae y accedemos state.nombreSlice.nombreProp
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button>Order Cake</button>
            <button>Restock Cake</button>
        </div>
    )
}