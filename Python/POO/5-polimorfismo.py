#Capacidad de un objeto de comportarse de maneras distintas
#En este ejemplo el método hablar es polimorfo al tipo de objeto desde donde sea llamado
class Animal():
    def hablar(self):
        print("Soy un animal")

class Perro(Animal):
    def hablar(self):
        print("Woof!")

class Gato(Animal):
    def hablar(self):
        print("Miau!")

