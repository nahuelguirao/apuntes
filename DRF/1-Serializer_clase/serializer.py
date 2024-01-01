from rest_framework import serializers
from users.models import User

# nombreModelo + Serializer por convención 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User #Se le pasa el modelo al cual hará referencia
        fields = '__all__' #Campos que se utilizaran (puede usarse exclude)