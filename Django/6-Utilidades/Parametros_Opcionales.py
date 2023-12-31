#1°
from django.urls import path
from . import views

urlpatterns = [
    path('', views.optional, name='optional'),
    path('<str:name>', views.optional, name='optional'), #Ambas url gestionadas por la misma vista
]


#2°
from django.shortcuts import render

def optional(request, name='nombre default'): #Como id seria un parametro opcional hay que agregarle un valor por defecto
    return render(request, 'optional.html', {'name':name})

#3° Luego consumiria la información como un contexto normal