import { useForm } from '../hooks/useForm'

export const Form = () => {
    const initialForm = {
        email: '',
        password: ''
    }

    const { formState, onInputChange } = useForm(initialForm)

    const { email, password } = formState

    const sendForm = (e) => {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <form onSubmit={sendForm}>
            <h2>FORMULARIO:</h2>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={onInputChange}
                    autoComplete='current-email'
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    autoComplete="current-password"
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}
