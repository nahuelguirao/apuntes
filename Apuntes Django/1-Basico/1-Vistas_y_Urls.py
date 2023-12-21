from django.http import HttpResponse

#Toda vista recibe un request siempre
def hello_world(request):
    return HttpResponse('Hola mundo!')

from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    #Creo un camino con la vista generada 
    path('saludo/', views.hello_world, name='hello world')
]


#Para utilizar el nombre de una URL directamente en un enlace:
<a href='{% url "hello world" %}'>Link</a>