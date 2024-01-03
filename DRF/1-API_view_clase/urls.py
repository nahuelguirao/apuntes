from django.urls import path
from users.api.api import UserAPIView

urlpatterns = [
    #Se le pasa ApiView en lugar de una vista común de django
    path('usuario/', UserAPIView.as_view() ,name='usuario'),
]