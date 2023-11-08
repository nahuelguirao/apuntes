//Sirven para pasar valores de un componente padre a un componente hijo


//En el componente padre se pasan las props:
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* titulo y subtitulo serian las props  (SI NECESITO MANDAR UN NÚMERO es {numero}*/}
        <PrimerComponente titulo='Esta sección es de props' subtitulo='Curso react' numero={50} />
    </React.StrictMode>,
)


//En el componente hijo:
import React from 'react'
// se desestructuran las props (como un objeto) en los parametros de la función
export const PrimerComponente = ({ titulo, subtitulo }) => {
    return (
        <>
            {/*Uso las propiedades*/}
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}


//Hacer que un prop sea requerido y definido el tipo + default
import PropTypes from 'prop-types'
PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired,
}
PrimerComponente.defaultProps = {
    titulo: 'Titulo por defecto',
    subtitulo: 'Subtitulo por defecto',
}