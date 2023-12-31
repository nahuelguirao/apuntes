#Se pueden configurar mensajes de distintos tipos con django.contrib import utils

from django.shortcuts import render
from django.contrib import messages

def index(request):
    messages.success(request,'Página cargada con éxito') #Hay mensajes de error, info y demas.
    return render(request, 'messages.html', {})


#Dentro de la plantilla HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Mensajes</h1>
    <ul>
      {% for message in messages %}
      <li>{{message}}</li>
      {% endfor %}
    </ul>
  </body>
</html>