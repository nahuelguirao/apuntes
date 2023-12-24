import { motion } from 'framer-motion'

export function App() {
    return (
        <>
            <motion.div
                className="green"
                //Tanto en initial ,animate y exit se pueden pasar props CSS normales
                initial={{ //Estado incial del elemento
                    rotate: 0
                }}

                animate={{ //Animación que se realiza 1 vez
                    rotate: 180
                }}

                transition={{ //En transition se maneja los tiempos de duración/easing y demas
                    duration: 2,
                    ease: 'backInOut',
                    times: [0, 0.25, 1, 2] //Controla los tiempos de la animación (divide la duración) IMPORTANTE! todas las animaciones deben tener la misma longitud que este array si se quiere implementar
                }}
            ></motion.div>
        </>
    )
}
