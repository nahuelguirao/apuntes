#1° Crear un archivo forms.py e importar => from django import forms

#2° Declaro los formularios como una clase (similar a un modelo)
from django import forms

class EjemploForm(forms.Form):
    name = forms.CharField(label='Ingrese su nombre:') #Se pueden agregar valores de formulario
    url = forms.URLField(label='Ingrese su sitio web:', required=False) #Hay distintos tipos de 'fields' con sus respectivos validadores

#3° Envio el formulario a traves de un contexto de una vista para utilizarlo en una plantilla
from django.shortcuts import render
from .forms import EjemploForm

def form(request):
    form = EjemploForm()
    return render(request, 'form.html', {'form':form})

#4° Mostrar el formulario en una plantilla
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>FORMULARIO DE CLASES</h1>
    <form>
    #   Se puede determinar que cada casilla del form como un
    #   parrafo (o el elemento que sea) con as_elemento 
      {{form.as_p}}
      <button>Enviar</button>
    </form>
  </body>
</html>
