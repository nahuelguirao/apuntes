import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function App() {
    //Se tiene que utilizar el hook react useRef
    const ref = useRef(null)

    const inInView = useInView(ref, { once: true }) //Primero se pasa el elemento referenciado y luego un objeto, si se pone once: true solo se animara una vez

    return (
        <>
            <div
                className='green'
                ref={ref}
            />
        </>
    )
}
