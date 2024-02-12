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
}