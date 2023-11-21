import React from 'react'
import { Contador } from './components/ComponentContador'
import { Form } from './components/ComponentForm'
import { CompFetch } from './components/ComponentFetch'

export const Practica = () => {
    return (
        <>
            <h1>Hooks</h1>
            <hr />
            <Contador />
            <hr />
            <Form />
            <hr />
            <CompFetch />
        </>
    )
}
