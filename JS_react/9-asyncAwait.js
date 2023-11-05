const ul = document.createElement('ul')

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(function (datos) {
        datos.forEach(function (post) {
            let li = document.createElement('li');
            li.innerText = post.name;
            ul.appendChild(li);
        });
    document.body.appendChild(ul);
    });

//Forma mas moderna con async await (al usar await espera la response)
async function cargarDatos() { //Para que funcione await tengo que declararla dentro de una funcion async
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments')
    const datos = await respuesta.json()
    console.log(datos)
}

cargarDatos()