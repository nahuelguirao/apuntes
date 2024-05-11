#LISTAS 
lista = [1,2,3,4,5,6,7,8,9,10]


#Determinar rangos de listas para sublistas (el indice final no es incluido)
sublista = lista[0:5]


#MÉTODOS
lista_lenguajes = ["Python","Java","C#","JavaScript", ".NET"]

#append => Agregar elemento al final de la lista
lista_lenguajes.append("Cobol")

#extend => Nos permite agregar una sublista a la lista main
lista_lenguajes.extend(["Scratch","PHP"])

#insert => Agregar un elemento en un indice especifico
lista_lenguajes.insert(2, "Solidity")

#remove => Elimina un elemento dado un valor (elimina la primera coincidencia)
lista_lenguajes.remove("PHP")

#pop => Elimina el último elemento de la lista (si no se pasa parametro, sino el indice que se le pase)
lista_lenguajes.pop()

#count => Cuenta la cantidad de veces que aparece un valor
print(lista_lenguajes.count('C#'))

#index => Devuelve el indice de un elemento si lo encuentra (sino encuentra tira excepción)
print(lista_lenguajes.index("JavaScript"))

#len => Longitud de la lista
print(len(lista_lenguajes))

#reverse => Da vuelta la lista !IMPORTANTE cambia la lista original
lista_lenguajes.reverse() 
