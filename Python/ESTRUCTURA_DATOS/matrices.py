#Definiendo una matriz (lista de listas o lista bidimensional)

matriz = [
    [1,3,5],
    [2,6,1],
    [0,5,2]
]

#Matrices => [N° Fila, N° Columna]
print(matriz[2][1])

for i in range(0, len(matriz)):
    for j in range(0, len(matriz[i])):
        print(matriz[i][j])