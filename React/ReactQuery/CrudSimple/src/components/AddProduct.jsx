import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postProduct } from "../api/productsAPI"

export function AddProduct() {
    const queryClient = useQueryClient() //Permite gestionar queries por su nombre

    const addProductMutation = useMutation({
        mutationFn: postProduct,
        onSuccess: () => {
            console.log('Added.')
            queryClient.invalidateQueries('product') //Nos permite 'actulizar' un querie haciendo que se vuelva a llamar
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newProduct = Object.fromEntries(formData)

        addProductMutation.mutate({ ...newProduct, stock: true })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" />

            <label htmlFor="description">Description: </label>
            <textarea id="description" name="description" />

            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" />

            <button>Add product</button>
        </form>
    )
}