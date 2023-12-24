import { motion, useAnimationControls } from 'framer-motion'

export function App() {
    //Hook para manejar una animación en particular puede servirnos
    //para cuando tenemos que animar un componente tocando otro
    const flipControl = useAnimationControls()

    const handleClick = () => {
        flipControl.start('flip') //puede ser start/mount, etc
    }

    return (
        <>
            <button onClick={handleClick}>Giralo!</button>
            <motion.div
                className='green'
                variants={{
                    initial: {
                        rotate: 0
                    },
                    flip: {
                        rotate: 360
                    }
                }}
                initial='initial'
                animate={flipControl}
            ></motion.div>
        </>
    )
}
