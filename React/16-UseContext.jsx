//Principalmente un provider se utiliza para no tener que pasar propiedades a traves de un elemento padre a uno nieto por ejemplo sino que directamente les pasa los datos a todos los descendientes

//1° Creo un contexto (en este caso seria de un usuario) / Puede ser en una carpeta de context (UsuarioContext.jsx por ejemplo)
import { createContext } from "react";

export const UsuarioContext = createContext()

//2° Dentro de la misma carpeta creo un archivo con el provider (UsuarioProvider.jsx por ejemplo)
import React from 'react'
import { UsuarioContext } from './UsuarioContext'

const usuario = {
    nombre: 'Nahuel',
    tecnologia: 'React',
    mail: 'nahuel@gmail.com'
}

//Recibe los 'children', es decir los hijos a los que va a proveer de datos
export const UsuarioProvider = ({ children }) => {
    return (
        //Dentro de value se pasa un objeto con la data que va a proveer a los childrens con el nombre del contexto + .Provider
        <UsuarioContext.Provider value={{ usuario }}>
            {children}
        </UsuarioContext.Provider>
    )
}


//3° En este ejemplo todos los componentes/fragmentos que desciendan de App podran utilizar los datos que provee el usuarioProvider
import { UsuarioProvider } from './context/UsuarioProvider'

export const App = () => {
    return (
        <UsuarioProvider>
            <NavBar />

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/*' element={<Navigate to='/' />} ></Route>
            </Routes >
        </UsuarioProvider>
    )
}

//4° ¿Como consumo los datos desde un child? con UseContext
import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

export const Home = () => {
    //Desestructuro el usuario igualandolo al contexto que lo contiene y se lo paso al hook
    const { usuario } = useContext(UsuarioContext)

    return (
        <>
            <h1>{usuario.nombre}</h1>
            <p>{usuario.tecnologia}</p>
        </>
    )
}