//En el componente padre paso la prop de value
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContadorApp value={0} />
    </React.StrictMode>,
)


import { useState } from 'react'

export const ContadorApp = ({ value }) => {
    //Ejemplo de HOOK / useState => [nombreVariable, metodo (para cambiar la constante)] = useState(variable a modificar)
    const [contador, setContador] = useState(value)

    const handleClick = () => {
        //Uso el metodo del Hook para poder modificar la constante
        setContador(contador + 1)
    }

    return (
        <>
            <h1>Contador:</h1>
            <button onClick={handleClick}>
                Soy un boton
            </button>
            {/*LLamo a {contador} NO a value */}
            <p id="contador">{contador}</p>
        </>
    )
}