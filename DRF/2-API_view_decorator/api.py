from rest_framework import status #To specify the HTTP status code into a Response
from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import User
from users.api.serializer import UserSerializer 


@api_view(['GET', 'POST'])
def user_api_view(request):
    #Gets all the users
    if request.method == 'GET':
        #Query 
        users = User.objects.all() 
        users_serializer = UserSerializer(users, many = True)  #If the serializer has many results => many = true
        return Response(users_serializer.data, status= status.HTTP_200_OK) 
    
    #Create user
    elif request.method == 'POST':
        new_user_serializer = UserSerializer(data = request.data) #Creates a new user with the request info
        
        #Validation
        if new_user_serializer.is_valid():
            new_user_serializer.save()
            return Response({'message' : 'User created correctly.'}, status=status.HTTP_201_CREATED) 
        
        return Response(new_user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) #If exists any error with the validation


@api_view(['GET','PUT','DELETE'])
def user_detail_view(request, id): #Gets the ID from the URL
    
    #Query filter by user's ID
    user = User.objects.filter(id=id).first()
    
    #Validation
    if user:
        #Get user data
        if request.method == 'GET':
            user_serializer = UserSerializer(user) #Transform in JSON user's data
            return Response(user_serializer.data, status=status.HTTP_200_OK)
        
        #Update 
        elif request.method == 'PUT':
            user_serializer = UserSerializer(user, data = request.data) #Update user's data with the request.data
            
            if user_serializer.is_valid():
                user_serializer.save() #Save changes if it's all OK
                return Response(user_serializer.data, status=status.HTTP_200_OK)
            
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        
        #Delete
        elif request.method == 'DELETE':
            user.delete() #Deletes the user
            return Response({'message': 'User deleted correctly.'}, status=status.HTTP_200_OK)
    
    #User not found
    else:
        return Response({'message': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)