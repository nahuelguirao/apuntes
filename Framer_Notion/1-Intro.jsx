//Primero recordar instalar framer-motion npm install framer-motion luego importarlo

//Animate presence tiene varios modos:
// -popLayout: remueve el elemento que se esta utilizando del DOM (deja de existir) y se genera un rediseño del componente (se puede agregar layout a un elemento para que se tenga en cuenta ese rediseño y se anime el movimiento nuevo)
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export const App = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className='container'>
            {/* Para poder usar el parametro 'exit' */}
            <motion.button onClick={() => setIsVisible(!isVisible)} layout>
                Show/Hide
            </motion.button>
            <AnimatePresence mode='popLayout'>
                {isVisible && (
                    <motion.div
                        className='box-animada'
                        //Estilos iniciales del elemento
                        initial={{
                            background: '#fff',
                            rotate: 0,
                            scale: 0,
                            y: 0,
                        }}
                        //Configuración de la animación
                        animate={{
                            rotate: 90,
                            scale: 1,
                            x: [0, 200, 100, 0, -100, 0]
                        }}
                        //Duración del evento, tipo de efecto, etc.
                        transition={{
                            duration: 1,
                            ease: 'backInOut',
                            y: 250
                        }}
                        //Animaciones 'de salida' para cuando se descompone el componente (para que funcionen hay que rodear al elemento con AnimatePresence como fragmento)
                        exit={{
                            rotate: 180,
                            background: '#ff9',
                            scale: 0,
                            y: 550,
                        }}
                    />
                )}
            </AnimatePresence>
        </div >
    )
}
