//COMPONENTE PADRE

import React, { useState } from "react";
import { UserList } from "./components/userList";

export const LlamadoApi = () => {
    const [endpoint, setEndpoint] = useState('users')

    //Cambia el endpoint de usuarios a comentarios al hacer click
    const handleFetch = () => {
        setEndpoint('comments')
    }

    return (
        <>
            <h1>Lista usuarios:</h1>
            <UserList endpoint={endpoint}></UserList>
            <button onClick={handleFetch}>LLamá a los resultados</button>
        </>
    )
}

//COMPONENTE HIJO
import React, { useEffect, useState } from 'react'

export const UserList = ({ endpoint }) => {
    const [datos, setDatos] = useState([])

    const consumoApi = async () => {
        try {
            const respuesta = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
            const datos = await respuesta.json()
            setDatos(datos)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        consumoApi()
    }, [endpoint]) //Si depende de una dependencia va en este caso dentro de la lista del useEffect
    //Y en base al endpoint se ejecuta un ternario
    return (
        <>
            <ul>
                {endpoint == 'users' ? datos.map(item => <li key={item.id}>{item.name}</li>)
                    : datos.map(item => <li key={item.id}>{item.body}</li>)}
            </ul>
        </>
    )
}
