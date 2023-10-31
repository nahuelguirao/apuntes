const materias = [
    {
        nombre : 'Fisica',
        nota : 9
    },
    {
        nombre : 'Historia',
        nota : 10
    },
    {
        nombre : 'Biologia',
        nota : 6
    },
    {
        nombre : 'Matematica',
        nota : 3
    },
    {
        nombre : 'Gimnasia',
        nota : 5
    }
]

const obtenerMateria = (id) => {
    return new Promise((resolve,reject) => {
        let materia = materias[id];
        if (materia == undefined) {
            reject('La materia no se ha encontrado.')
        } else {
            setTimeout(
                resolve(materia),1000
                );
        }
    })
}

const devolverInfo = async () => {
    let materia = []
    for (let i = 0; i < materias.length; i++) {
        materia[i] = obtenerMateria(i)
        materia[i].then(resultado => console.log(resultado))
    }
}

devolverInfo()