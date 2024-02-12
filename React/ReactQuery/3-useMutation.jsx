import { useMutation } from "@tanstack/react-query"
import { postProduct } from "../api/productsAPI"

export function AddProduct() {
    //Una mutación nos permite ejecutar cambios en el backend (No solo obtenerla como un query)
    const addProductMutation = useMutation({
        mutationFn: postProduct, //Función que utiliza
        onSuccess: () => {
            console.log('Added.')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newProduct = Object.fromEntries(formData)

        //utilizo el useMutation con mutate y le enviamos la data (si es que la función espera un argumento)
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