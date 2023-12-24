import { useScroll, motion, useTransform } from 'framer-motion'
import React from 'react'

export function App() {
    //Permite saber el % de scroll que se va realizando
    const { scrollYProgress } = useScroll()
    //Use transform sirve para ir modificando una propiedad de acuerdo a un %
    const background = useTransform(
        scrollYProgress, //Primero se le pasa que va a tomar como referencia
        [0, 1], //En cuantas partes se va a dividir el progreso
        ['rgb...', 'rgb ...'] //Valores de las partes separadas anteriormente
    )
    return (
        <>
            <motion.div
                style={{
                    scaleX: scrollYProgress, //A medida que se baja va llenando la barra
                    transformOrigin: 'left', //Establece la barra de cargar a partir de la izquierda
                    background: 'blue',
                    position: 'sticky',
                    top: 0,
                    width: '100%',
                    height: '20px'
                }}>
            </motion.div>
        </>
    )
}
