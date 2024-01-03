from django.urls import path
from users.api.api import user_api_view

urlpatterns = [
    #Se le pasa ApiView en lugar de una vista comun de django
    path('usuario/', user_api_view ,name='usuario'),
]