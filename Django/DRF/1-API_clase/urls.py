from . import UserAPIView #La vista de la API que hemos creado
from django.urls import path

urlpatterns = [
    #Importante al utilizar una APIView a partir de una clase debemos usar .as_view()
    path('usuarios/', UserAPIView.as_view(), name='lista_usuarios')
]

# RECORDAR! actualizar con un include en el urls del proyecto general