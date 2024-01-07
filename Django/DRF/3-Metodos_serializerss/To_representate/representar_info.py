from . import serializers
from . import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 
        
    #Para obtener campos especificos (para evitar renderizar info innecesaria)
    def to_representation(self, instance):
        #Instance es el diccionario que recibe el serializer (que le enviamos desde la vista)
        return {
            'id' : instance['id'],
            'username': instance['username'],
            'email': instance['email'],
            'password': instance['password']
        }

#IMPORTANTE! (le envio los valores desde la vista)

# if request.method == 'GET':
    users = User.objects.all().values('id','username','email','password')  #<= AQUÍ !!!!!!
#             users_serializers = UserSerializer(users, many = True)
#             return Response(users_serializers.data, status=status.HTTP_200_OK)