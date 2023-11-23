import React from 'react'
import { Contador } from './components/ComponentContador'
import { Form } from './components/ComponentForm'
import { CompFetch } from './components/ComponentFetch'
import { CalculosPesados } from './components/CalculosPesados'
import { ComponentCallBack } from './components/ComponentCallBack'
import { ListaTareas } from './components/ListaTareas'

export const Practica = () => {
    return (
        <>
            <h1>Hooks</h1>
            <hr />
            <ListaTareas />
            {/* <ComponentCallBack /> */}
            {/* <CalculosPesados /> */}
            {/* <hr />
            <Contador />
            <hr />
            <Form />
            <hr />
            <CompFetch /> */}
        </>
    )
}