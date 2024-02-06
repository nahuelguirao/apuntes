# 1° => Agregar a las settings app => rest_framework.authtoken

#Genero una vista (views.py) ya sea en la carpeta del proyecto o si tengo una app especifica de usuarios

from datetime import datetime
from django.contrib.sessions.models import Session
from . import ObtainAuthToken #from rest_framework.authtoken.views
from . import Token #from rest_framework.authtoken.models 
from . import Response
from . import status
from . import UserTokenSerializer

# 2° => Creo una clase para realizar un login con Token que hereda de ObtainAuthToken
class Login(ObtainAuthToken):
    
    #Redefino el método POST
    def post(self, request):
        
        login_serializer = self.serializer_class(data = request.data, context = {'request' : request}) #ObtainAuthToken tiene su propio serializer definido
        
        if login_serializer.is_valid(): #ObtainAuthToken solo verifica el nombre de usuario y la contraseña
            user = login_serializer.validated_data['user'] #Si es valido quiere decir que el usuario existe y lo almaceno en una variable
            
            if user.is_active: #(is_active) Es un campo del modelo user IGNORAR
                token, created = Token.objects.get_or_create(user = user) #Verifica si el usuario ya tiene un token o no (si no tiene lo crea)
                user_serializer = UserTokenSerializer(user) #Creo un serializer especifico para que me retorne los campos que quiera que me devuelva
                
                if created: #Si se crea el token 
                    return Response({
                        'usuario': user_serializer.data, #Necesito serializar el user
                        'token': token.key,
                        'message':'EXITO'
                        }, status.HTTP_201_CREATED)
                
                else: #Si ya estaba creado el token
                    return Response({'error':'El usuario ya ha inciado sesión'}, status.HTTP_409_CONFLICT)
            
            else: 
                return Response({'message':'Usuario no activo.'}, status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'message':'Credenciales erroneas.'}, status.HTTP_400_BAD_REQUEST)

# 3° => Agrego la ruta a las url del proyecto  => path('', Login.as_view(), name='login'),