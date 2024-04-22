class Auto(): 
    #Atributos
    marca = "BMW"
    color = "Black"
    ruedas = 4
    velocidad_max = 180

    #Métodos
    def arrancar(self): 
        print("Encendiendo vehículo...")
    def apagar(self):
        print("Apagando vehículo...")


auto_1 = Auto()

auto_1.arrancar()