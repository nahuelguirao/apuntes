import { useQuery } from "@tanstack/react-query" //Permite generar un query y acceder a la info del mismo
import { getProducts } from "../api/productsAPI"

export function ProductsList() {
    const { isLoading, data: products, isError, error } = useQuery({
        queryKey: ['products', 'parametroPara la función'], //Nombre del query, tambien podemospasar en orden los parametros para la función (luego los uso en la función asi => ###)
        queryFn: getProducts, //Función que utiliza 
        select: products => products.sort((a, b) => b.id + a.id) //Permite ordenarlos / filtrarlos datos traidos
    })

    if (isLoading) return <p>Cargando...</p>

    if (isError) return <p>Error: {error.message}</p>

    return (
        products.map(product => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <input
                    id={product.id}
                    type="checkbox"
                    checked={product.stock}
                />
                <label htmlFor={product.id}>In stock</label>
            </div>
        ))
    )
}


//Ejemplo de como utilizar los parametros
function funcionPrueba(ctx) {
    const [_, parmetroNecesario] = ctx.queryKey //con ctx (si quiero TIPARLO es con QueryFunctionContext)
    //Resto función...
}