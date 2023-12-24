import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export function App() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <>
            <motion.button
                onClick={() => setIsVisible(!isVisible)}
                layout // IMPORTANTE si se usa popLayout y genera un movimiento de otro elemento se puede agregar a dicho elemento 'layout' para que se anime la movilidad
            >
                SHOW/HIDE
            </motion.button>
            {/* 
        Animate presence tiene distintos 'modos',
        popLayout elimina del DOM cuando se va (exit) el elemento
      */}
            <AnimatePresence mode='popLayout'>
                {isVisible && (
                    <motion.div
                        className='green'
                        animate={{
                            rotate: 90,
                            scale: [0, 1] //Si quiero hacer algo similar a un 'keyframe' puedo pasarlo dentro de un array  
                        }}
                        //Para poder utilizar 'EXIT' hay que agrupar el elemento en un 'AnimatePresence'
                        exit={{
                            rotate: 180,
                            scale: [1, 0]
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
