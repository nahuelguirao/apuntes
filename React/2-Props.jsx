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


//Importo PropTypes
import PropTypes from 'prop-types'
//Configurar el tipo de props con PropTypes
PrimerComponente.propTypes = {
    //Son requeridos 
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.number.isRequired,
}

PrimerComponente.defaultProps = {
    //Seteo de valores por defecto
    titulo: 'Titulo por defecto',
    subtitulo: 'Subtitulo por defecto',
}