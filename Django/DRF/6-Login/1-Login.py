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
    
    def post(self, request, *args, **kwargs):
        #Ya viene definido el serializer por ello hacemos referencia con self (tiene dos parametros el username y el password, es decir que los valida)
        login_serializer = self.serializer_class(data = request.data, context = {'request':request})
        
        if login_serializer.is_valid(): #Verifica que el usuario exista
            user = login_serializer.validated_data['user'] #Contiene la info del usario que encontró
            
            if user.is_active: 
                #Token contiene el token y created devuelve true / false
                token, created = Token.objects.get_or_create(user = user) #Necesita que le pasemos el usuario, si no existe el token lo crea, sino lo obtiene
                user_serializer = UserTokenSerializer(user) #Necesito serializar la información por ello utilizo un serializer propio
                if created:
                    return Response({
                        'token': token.key,
                        'user' : user_serializer.data,
                        'message': 'EXITO'
                        }, status.HTTP_201_CREATED)
                else:
                    token.delete() #Si ya existe el token lo elimino y creo uno nuevo
                    token = Token.objects.create(user = user)
                    return Response({
                        'token': token.key,
                        'user' : user_serializer.data,
                        'message': 'EXITO'
                        }, status.HTTP_201_CREATED)
            else: 
                return Response({'error':'Usuario no esta activo.'}, status.HTTP_401_UNAUTHORIZED)
        
        else:
            return Response({'erorr':'Credenciales erroneas.'}, status.HTTP_400_BAD_REQUEST)

# 3° => Agrego la ruta a las url del proyecto  => path('', Login.as_view(), name='login'),