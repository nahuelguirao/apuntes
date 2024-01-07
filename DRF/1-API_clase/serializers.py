from . import serializers # from rest_framework import ...
from . import User #Un modelo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' #Puede utilizarse exclude o campos especificos