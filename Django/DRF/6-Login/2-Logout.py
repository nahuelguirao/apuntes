from datetime import datetime
from django.contrib.sessions.models import Session
from . import ObtainAuthToken, APIView #from rest_framework.authtoken.views
from . import Token #from rest_framework.authtoken.models 
from . import Response
from . import status

class Logout(APIView):
    def post(self, request):
        token = request.data['token'] #Obtengo el token enviado 
        token = Token.objects.filter(key = token).first() #Filtro para ver si el token realmente existe
        
        if token:
            user = token.user #Si existe el token vinculo el usuario que esta asociado y lo declaro
            
            all_sessions = Session.objects.filter(expire_date__gte = datetime.now()) #Busca todas las sesiones que ya estan abiertas
            
            if all_sessions.exists(): #Si existe alguna sesión o sesiones las cierra
                for session in all_sessions:
                    session_data = session.get_decoded()
                    if user.id == session_data.get('auth_user_id'):
                        session.delete() #Borra la sesión
            token.delete() #Borra el token
            
            return Response({'message':'Sesión cerrada.'}, status.HTTP_200_OK)

        else:
            return Response({'error':'Token no válido.'}, status.HTTP_400_BAD_REQUEST)