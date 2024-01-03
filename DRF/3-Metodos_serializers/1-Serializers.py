from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = '__all__' 


#Un serializador puede estar NO basado en un modelo (si es así hereda de serializers.Serializer, sino serializers.ModelSerializer)
class TestUserSerializer(serializers.Serializer):
    #Funciona igual que un modelo de Django
    name = serializers.CharField(max_length = 200)
    email = serializers.EmailField()
    
    #Si quiero agregar una validación extra pongo validate_NombreCampo
    def validate_name(self, value):
        print(value)
        return value #Recordar siempre retornar el value