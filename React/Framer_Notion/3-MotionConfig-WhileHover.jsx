import { motion, MotionConfig } from 'framer-motion'

export function App() {
    //Motion config funciona como un contexto para elementos que queremos la misma animación
    //Se pueden definir elementos como initial, transition y demas
    return (
        <>
            <MotionConfig
                transition={{
                    duration: 2
                }}
            >
                <motion.button
                    whileHover={{ //Al hacer hover
                        scale: 1.05
                    }}
                >
                    CLICK ME
                </motion.button>
                <motion.button
                    whileTap={{ //Al hacer click 
                        scale: 0.90,
                        rotate: 360
                    }}
                >
                    CLICK ME 2
                </motion.button>
            </MotionConfig>
        </>
    )
}
