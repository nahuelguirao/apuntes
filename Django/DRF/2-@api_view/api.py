#RECORDAR AGREGAR UN MODULO __INIT__.py en la carpeta

from . import Response #from rest_framework.response
from . import api_view #Para generar una vista de una API como una función en lugar de una clase (from rest_framework.decorators)
from . import UserSerializer #El serializador creado
from . import User #Modelo
from . import status # Para especificar el estado de una response (from rest_framework import ...)

#El api_view recibe en una lista los metodos HTTP aceptados por la vista
@api_view(['GET', 'POST'])
def user_api_view(request):
        
        if request.method == 'GET':
            users = User.objects.all()
            users_serializers = UserSerializer(users, many = True) #Aqui el serializado cumple la función de 'serializar'
            
            return Response(users_serializers.data, status = status.HTTP_200_OK)
        
        elif request.method == 'POST':
            new_user = UserSerializer(data=request.data) #Aqui el serializador cumple una función de 'deserializar' el contenido que trae el request
            if new_user.is_valid():
                new_user.save() #Si es valido guarda el usuario
                return Response('Usuario creado corrrectamente')
            
            return Response(new_user.errors) #La instanciación del serializer contiene los errores (si es que los hay con .errors)
        

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail_api_view(request, pk):
    user = User.objects.filter(id=pk).first()
    
    if user:
        if request.method == 'GET':
            user_info = UserSerializer(user)
            return Response(user_info.data)

        if request.method == 'PUT':
            edited_user = UserSerializer(user, data=request.data)
            if edited_user.is_valid():
                edited_user.save()
                return Response(edited_user.data)
        
            return Response(edited_user.errors)
    
        if request.method == 'DELETE':
            user.delete()
            return Response({'message':'Usuario eliminado.'})
    
    return Response({'message':'Usuario no encontrado.'})