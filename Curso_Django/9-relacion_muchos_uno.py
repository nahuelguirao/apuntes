#En el modulo 'modelos'

from django.db import models


class modeloEjemplo(models.Model):
    nombre = models.CharField(max_length=100, null=False)

class modeloForaneo(models.Model):
    #Se utiliza models.Foreignkey y se le pasa como parametro
    #la entidad a la que se le desea relacionar
    clave_foranea = models.ForeignKey(modeloEjemplo, on_delete=models.CASCADE)
    #El on_delete quiere decir que ocurre con todos los objetos relacioandos
    #cuando se elimina el objeto con el que estan relacionados
    
#¿Como saber todos los elementos que estan relacionado a un objeto

#DESDE 'views' IMPORTANTE EL _set
resultado = autor.libros_set.all()
#Se pueden usar todo tipo de consultas