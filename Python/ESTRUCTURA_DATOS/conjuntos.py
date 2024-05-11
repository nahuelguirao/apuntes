#Estan desordenados no hay un orden por índice 
# y NO permite elementos repeditos (lo eliminará)
conjunto = set([1,2,3,45,55])

conjunto_2 = {1,2,44,511,22,22,1}


#Saber si hay un elemento
print(1 in conjunto_2)


#Agregar un elemento
conjunto.add('ELEMENTO AGREGADO')

#Eliminar un elemento
conjunto.remove('ELEMENTO AGREGADO')



lenguajes_1 = {'Cobol','python'}
lenguajes_2 = {'Rust','JS', 'Cobol'}

#Unir 2 sets
union = lenguajes_1.union(lenguajes_2)

#Genera un set con los valores que aparecen en ambos sets
interesection = lenguajes_1.intersection(lenguajes_2)

#Si dos sets no comparten ningun elemento en común
no_coincidencias = lenguajes_1.isdisjoint(lenguajes_2)

#Que elementos tiene el conjunto 1 distintos al conjunto 2
diferencias = lenguajes_1.difference(lenguajes_2)
