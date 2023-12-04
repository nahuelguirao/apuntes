import React, { useState } from 'react'

const Items = ({ nombre, visto }) => {
    return (
        //En react las clases se asignan con className='...'
        <li className='nombreDeClase'>
            {nombre} {visto ? '✔️' : '❌'}
        </li>
    )
}


export const ListadoApp = () => {
    //Función para pushear un item del array se utiliza useState y se le pasa como parametro un arreglo [...array, nuevo item]
    const addTask = () => {
        setArray([...array, { nombre: 'React', visto: false }])
    }

    let listaTemas = [
        { nombre: 'HTML', visto: true },
        { nombre: 'CSS', visto: false },
        { nombre: 'JS', visto: false },
    ]

    const [array, setArray] = useState(listaTemas)

    return (
        <>
            <h1>LISTADO DE TEMAS VISTOS</h1>
            <ul>
                {array.map(tema => <Items key={tema.nombre} nombre={tema.nombre} visto={tema.visto}></Items>)}
            </ul>
            <button onClick={() => addTask()}>Agregar</button>
        </>
    )
}
