import React, { useRef, useEffect } from 'react'

export const Form = () => {
    //El hook useRef se utiliza para hacer referencia a un elemento dentro del JSX
    const focusRef = useRef()
    //Uso un useEffect para que solo se produzca al cargar el componente por primera vez
    useEffect(() => {
        //Hace foco sobre el elemento referenciado
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">UserName:</label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    //Se establece la ref para el input (focusRef = a este input)
                    ref={focusRef}

                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name='email'
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
