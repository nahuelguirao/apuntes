#IMPORTANTE! LOS FORMULARIOS POST DEBEN TENER EL CSRF TOKEN (protección contra el robo de sesiones)
<form action="{% url 'post_goal'%}" method="POST">
  <h1>POST FORM</h1>
  {% csrf_token %} # <= Aquí
  <label>Nombre: </label>
  <input type="text" name="nombre" />
  <input type="submit" value="enviar" />
</form>

#El tratamiento de datos es igual que si fuera get pero con POST
from django.shortcuts import render
from django.http import HttpResponse

def post_goal(request):
    if request.method != 'POST':
        return HttpResponse('METHOD NOT SUPPORTED.')
    
    name = request.POST['nombre']
    return render(request, 'post_succes.html', {'name':name})