import { useState } from "react"

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}

//Tambien puedo hacer un handleSubmit con puro JS de manera NO controlada

const handleSubmit = (event) => {
    event.preventDefault()
    //Arma un objeto completo con todos los campos
    const campos = Object.fromEntries(new window.FormData(event.target))
    //o Tambien si es uno solo:
    const fields = new window.FormData(event.target)
    const pelicula = fields.get('pelicula') //Obtengo por el nombre del input
}
