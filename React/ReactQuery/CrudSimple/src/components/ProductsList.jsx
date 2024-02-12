import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query" //Permite generar un query y acceder a la info del mismo
import { deleteProduct, getProducts, updateProduct } from "../api/productsAPI"

export function ProductsList() {
    const { isLoading, data: products, isError, error } = useQuery({
        queryKey: ['product'], //Nombre del query
        queryFn: getProducts, //Función que utiliza 
        select: products => products.sort((a, b) => b.id + a.id) //Permite ordenarlos / filtrarlos datos traidos
    })

    const queryClient = useQueryClient()

    const deleteProductMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            console.log('Deleted')
            queryClient.invalidateQueries('product')
        }
    })

    const updateProductMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            console.log('Updated')
            queryClient.invalidateQueries('product')
        }
    })

    if (isLoading) return <p>Cargando...</p>

    if (isError) return <p>Error: {error.message}</p>

    return (
        products.map(product => (
            <div key={product.id}>
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <button onClick={() => deleteProductMutation.mutate(product.id)}>Delete</button>
                <input
                    id={product.id}
                    type="checkbox"
                    onChange={(e) => updateProductMutation.mutate({ ...product, stock: e.target.checked })}
                    checked={product.stock}
                />
                <label htmlFor={product.id}>In stock</label>
            </div>
        ))
    )
}