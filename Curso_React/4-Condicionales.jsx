import React from 'react'

//Ternario la primera opción es si se cumple, la segunda sino.
const Item = ({ nombre, revisado }) => {
    return (
        <li>{nombre}
            {revisado ? '✔️' : '❌'}
        </li>
    )
}

//Si se cumple la condición hace una acción
const Items = ({ nombre, revisado }) = () => {
    return (
        <li>{nombre}
            {revisado && '✔️'}
        </li>
    )
}

export const CondicionalesApp = () => {
    return (
        <>
            <h1>Temas vistos del curso:</h1>
            <ol>
                <Item nombre='HTML' revisado={true}></Item>
                <Item nombre='CSS' revisado={false}></Item>
                <Item nombre='JS' revisado={false}></Item>
            </ol>
        </>
    )
}
