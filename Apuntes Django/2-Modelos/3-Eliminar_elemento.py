#Eliminar un objeto
from django.http import HttpResponse
from .models import ModeloUsuario


def delete(request):
    #¿Como encontrar/filtrar un objeto del modelo?
    usuario_filtrado = ModeloUsuario.objects.get(id=2) #Busca el que tiene id = 2
    usuario_filtrado.delete()
    #Otra forma :
    ModeloUsuario.objects.filter(id=1).delete()
    return HttpResponse('elemento borrado')