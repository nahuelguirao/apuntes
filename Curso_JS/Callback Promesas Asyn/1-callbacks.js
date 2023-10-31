//Funcion dentro de otra función como parametro

function modify(array, callback){
    //hacemos algo
    array.push('nahuel');
    //despues de hacer algo...
    callback()
}


const names = ['roberto','carlos','midu']

modify(names, function() {
    console.log('Se modificó el array!')
})

console.log(names)
