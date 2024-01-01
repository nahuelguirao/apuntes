#TODO dentro de una carpeta 'API' dentro de una APP django'
from rest_framework.response import Response
from rest_framework.views import APIView
from users.models import User
from users.api.serializer import UserSerializer #Importo tanto el modelo como el serializer creado

class UserAPIView(APIView): #NombreModelo + APIView
    #Método GET (Siempre se le pasa self y request)
    def get(self, request):
        users = User.objects.all() #Obtiene todos los usuarios
        
        users_serializer = UserSerializer(users, many = True) #Para que no solo renderice 1 valor se le agrega many = true
        
        return Response(users_serializer.data) #IMPORTATE el .data que esta guardada en users_serializer