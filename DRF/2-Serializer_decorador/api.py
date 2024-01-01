from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import User
from users.api.serializer import UserSerializer 


@api_view(['GET', 'POST'])
def user_api_view(request):
    if request.method == 'GET':
        users = User.objects.all() #Trae todos los usuarios
        users_serializer = UserSerializer(users, many = True)  #Como van a ser varios agrego many = True
        return Response(users_serializer.data)
    
    elif request.method == 'POST':
        new_user_serializer = UserSerializer(data = request.data) #Creo el nuevo usuario con la data del request
        
        if new_user_serializer.is_valid():
            new_user_serializer.save()
            return Response(new_user_serializer.data) #Guarda el nuevo user y lo muestra
        
        return Response(new_user_serializer.errors) #Sino encuentra retorna los errores


@api_view(['GET','PUT','DELETE'])
def user_detail_view(request, id): #Recibo el id por la URL
    if request.method == 'GET':
        user = User.objects.filter(id=id).first() #Filtro la primera coincidencia
        user_serializer = UserSerializer(user) #No coloco many = true porque solo me trae un objeto
        return Response(user_serializer.data)
    
    elif request.method == 'PUT':
        user = User.objects.filter(id=id).first()
        user_serializer = UserSerializer(user, data = request.data) #Lleno los nuevos datos con la data del request
        
        if user_serializer.is_valid():
            user_serializer.save() #Actualiza con los nuevos datos si esta todo OK
            return Response(user_serializer.data)
        
        return Response(user_serializer.errors) #Si algo sale mal retorna un error
    
    elif request.method == 'DELETE':
        user = User.objects.filter(id = id).first()
        if user:
            user.delete() #Elimina el usuario si existe
            return Response("Eliminado")
        
        return Response("Usuario no encontrado")