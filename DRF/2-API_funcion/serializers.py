from . import serializers
from . import User

#Es lo mismo que en una API de clase
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__' 