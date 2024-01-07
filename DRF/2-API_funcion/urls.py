from . import user_api_view #Vista creada desde el api.py
from django.urls import path

urlpatterns = [
    #Como ya es una función directamente se pasa el nombre de la vista (en lugar de usar as_view() como si fuera una vista de clase)
    path('usuarios/', user_api_view, name='lista_usuarios')
]