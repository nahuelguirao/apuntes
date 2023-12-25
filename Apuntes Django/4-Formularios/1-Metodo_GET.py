from django.shortcuts import render
from django.http import HttpResponse

def goal(request):
    #SI EL MÉTODO ES DISTINTO DE GET LANZAMOS ERROR
    if request.method != 'GET':
        return HttpResponse('Error method not supported.')
   
    name = request.GET['nombre'] #OBTENER LOS VALORES CON EL NOMBRE DEL INPUT
    print(name)
    return render(request, 'succes.html', {'name':name}) #LO PASO AL CONTEXTO PARA UTILIZARLO EN LA PLANTILLA


#RECORDAR, en el metodo del formulario agregar el method
# <form action="{% url 'goal'%}" method="GET">
#   <h1>Form de contacto</h1>
#   <label>Nombre: </label>
#   <input type="text" name="nombre" />
#   <input type="submit" value="enviar" />
# </form>
