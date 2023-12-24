#CREAR UN OBJETO
from django.http import HttpResponse
from .models import ModeloUsuario

# Create your views here.
def create(request):
    #Esto es una forma de crear un elemento usuario dentro del modelo de forma estatica
    usuario = ModeloUsuario(username='Nahuelito',age=19)
    usuario.save()
    #Otra forma es (no necesita hacer el .save() ):
    usuario = ModeloUsuario.objects.create(username='Carola', age='18')
    return HttpResponse('elemento creado')

