import React, { useEffect, useState } from "react";

export const ConsumoApi = () => {
    //Hook para manejar el estado de la lista de usuarios
    const [usuarios, setUsuarios] = useState([])

    //LLamdo a la API y trayendo la data de usuarios
    const llamadoUsuario = async () => {
        try {
            //Igualo a una variable el llamado a la API 
            const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
            //Paso los datos a formato JSON
            const datos = await respuesta.json()
            //Utilizo el hook de usuarios para agregar los datos
            setUsuarios(datos)
        } catch (e) {
            //En caso de error
            console.error(e)
        }
    }

    //La funcion llamdoUsuario no se llamada directamente (Porque si no se ejecuta en bucle infinito de promesas y esta MAL)
    //Por ello se usa el hook useEffect (para realizar efectos secundarios como llamados a API's o manipulación del DOM)
    useEffect(() => {
        //De esta forma se ejecutaria una única vez el llamado Fetch
        llamadoUsuario()
    }, []) //La lista del final vacía serian las dependencias

    return (
        <>
            <h1>Lista usuarios:</h1>
            <ul>
                {usuarios.map(usuario => <li key={usuario.id}>Nombre: {usuario.name}</li>)}
            </ul>
        </>
    )
}