from django.shortcuts import render
from .models import modeloEjemplo

def actualizar_objeto(request):
    #Obtengo el objeto
    objeto = modeloEjemplo.objects.get(id=10)
    #Cambio el valor 
    objeto.nombre = 'Nahuel'
    #Guardo los cambios
    objeto.save()