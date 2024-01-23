#RECORDAR AGREGAR UN MODULO __INIT__.py en la carpeta

from . import Response #Para retornar un serializador con su respectiva data (from rest_framework.response)
from . import APIView #Para que nuestra vista funcione (from rest_framework.views)
from . import UserSerializer #Serializer creado
from . import User #Modelo en el cual esta basado el serializer

#Genera una vista de la API (es lo mismo que en django normal pero en lugar de vistas de plantillas muestra vistas de la API que creemos)
class UserAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        users_serializers = UserSerializer(users, many = True) #Como retorna varios resultados agregamos many = True
        
        return Response(users_serializers.data) # IMPORTANTE! el .data