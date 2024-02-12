//1° Configuro el uso de EJS

const express = require('express')
const allRouter = require('./routes/routes')
const path = require('path')
require('ejs')

const app = express()

app.set('view engine', 'ejs') //seteo el modelo de engine (ejs)
app.set('views', path.join(__dirname, 'views')) //views es requerido por ejs y le paso la ruta donde estan las plantillas

app.use(allRouter)

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(3000, () => [
    console.log('SERVER ON PORT 3000')
])

//2° Seteo la ruta y utilizo res.render('nombrePlantilla')
router.get('/ejs', (req, res) => {
    res.render('index', { title: 'Titulo desde JS' }) //Cuando renderizo la plantilla puedo pasarle un contexto
})

//3° Si quiero usar el contexto en la plantilla
{/* <body>
    <h1>
        <%= title %> //IMPORTANTE LOS SIGNOS
    </h1>
</body> */}


//4° en EJS puedo enlazar plantillas de esta forma con include
// <%- include('partials/header') %>
//     <h1>
//         <%= title %>
//     </h1>
// <%- include('partials/footer') %>


//4° Para ver condicionales, bucles mirar docs => https://ejs.co/
