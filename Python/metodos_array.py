nombres = ["Nahuel", "Carlos", "Nahuel"]

#Append => Agrega un elemento al final
nombres.append("Jorge")


#Insert => Agrega un elemento en un indice en especifico 
nombres.insert(0, "Juan")


#Extend => Agrega un iterable a otro iterable
nombres.extend(["Delfina", "Carmen"])


#Pop => Elimina el último elemento de la lista (puede recibir un indice)
nombres.pop()


#Remove => Elimina la primera coincidencia
nombres.remove("Nahuel")


#Index => Busca el indice de un elemento
nombres.index("Carlos")


#Count => Busca la cantidad de coincidencias de un elemento
nombres.count("Nahuel")