from . import Response #from rest_framework.response
from . import api_view #Para generar una vista de una API como una función en lugar de una clase (from rest_framework.decorators)
from . import UserSerializer #El serializador creado
from . import User #Modelo
from . import status # Para especificar el estado de una response (from rest_framework import ...)

#El api_view recibe en una lista los metodos HTTP aceptados por la vista
@api_view(['GET'])
@api_view(['GET', 'POST'])
def user_api_view(request):
        
        if request.method == 'GET':
            users = User.objects.all()
            users_serializers = UserSerializer(users, many = True)
            
            return Response(users_serializers.data, status = status.HTTP_200_OK)
        
        elif request.method == 'POST':
            new_user = UserSerializer(data=request.data) #el .data contiene toda la información enviada 
            if new_user.is_valid():
                new_user.save() #Si es valido guarda el usuario
                return Response('Usuario creado corrrectamente')
            
            return Response(new_user.errors) #La instanciación del serializer contiene los errores (si es que los hay con .errors)
        

@api_view(['GET','PUT','DELETE'])
def specific_user_view(request, id):
    
    user = User.objects.filter(id=id).first() #Filtra el usuario por el id ingresado en la url
    
    #Si existe
    if user:
        #Muestra el usuario
        if request.method == 'GET':
            user = UserSerializer(user) 
            return Response(user.data)
        #Actualiza el usuario
        elif request.method == 'PUT':
            updated_user = UserSerializer(user, data = request.data)
            if updated_user.is_valid():
                updated_user.save()
                return Response({'message':'Información actualizada correctamente'})
            return Response(updated_user.errors)
        #Elimina el usuario
        elif request.method == 'DELETE':
            user.delete()
            return Response({'message':'Usuario eliminado correctamente'})
    
    #Si no existe el user
    else: 
        return Response({'message':'Usuario no encontrado'})