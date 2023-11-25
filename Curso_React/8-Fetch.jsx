import React, { useEffect, useState } from 'react'

export const UsersApp = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        } catch (e) {
            console.error(e)
        }
    }
    //Para que no se ejecute infinitamente la llamada
    //useEffect( () => {función}, [dependencia]) La dependencia hace referencia a lo que tiene que cambiar para que se ejecute nuevamente la funcion en este caso el fetchUsers
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <>
            <h1>Lista Usuarios: </h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}