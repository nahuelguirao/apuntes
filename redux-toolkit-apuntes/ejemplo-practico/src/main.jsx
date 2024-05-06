import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//IMPORTAMOS EL PROVIDER Y EL STORE YA CONFIGURADO
import { Provider } from 'react-redux'
import store from './app/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* ENVOLVEMOS NUESTRA APP CON EL STORE */}
    <Provider store={store}>
      <App />
    </Provider>
  </>,
)
