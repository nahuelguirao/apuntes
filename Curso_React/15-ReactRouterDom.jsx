// Instalarlo : npm install react-router-dom

//1° Englobo la app general dentro de browser router que va a permitir utilizar las rutas dentro de la app.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </BrowserRouter>
)

//2° Establezco las rutas con routes y route (+Navigate)
import React from 'react'
import { NavBar } from './components/NavBar'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './routes/Home'
import { About } from './routes/About'
import { Contact } from './routes/Contact'


export const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/*' element={<Navigate to='/' />} ></Route> {/* con /* toda ruta que no se encuentre hace que con Navigate se redireccione al to=... */}
            </Routes >
        </>
    )
}

//3° Seteo los Links
import React from 'react'
//NavLink es un link resaltado
import { NavLink, Link } from 'react-router-dom'
//En ambos se utiliza seguido de ellos un to='/ruta'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}