from datetime import datetime
from django.contrib.sessions.models import Session
from . import ObtainAuthToken, APIView #from rest_framework.authtoken.views
from . import Token #from rest_framework.authtoken.models 
from . import Response
from . import status

class Logout(APIView):
    def get(self, request):
        try:
            #Se ve si existe un token 
            token = Token.objects.filter(key = request.GET.get('token')).first()
            
            if token: 
                #Si existe se busca el usuario y se cierran todas las sesiones
                user = token.user
                all_sesions = Session.objects.filter(expire_date__gte = datetime.now()) 
                        
                if all_sesions.exists():
                    for session in all_sesions:
                        session_data = session.get_decoded()
                        if user.id == int(session_data.get('_auth_user_id')):
                            session.delete()
                
                token.delete() #Borra el token
                session_message = 'Sesiones eliminadas.' 
                token_message = 'Token eliminado.'
                return Response({'token_message': token_message, 'session_message': session_message}, status.HTTP_200_OK)

            #Si no se encuentra un token 
            return Response({'error':'No se encontró un usuario con estas credenciales.'}, status.HTTP_404_NOT_FOUND)

        except:
            return Response({'error':'No se encontro "token" en la petición.'}, status.HTTP_404_NOT_FOUND)