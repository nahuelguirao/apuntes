from . import serializers
from . import User

#Un serializer tambien puede no estar basado en un modelo
class TestUserSerializer(serializers.Serializer):
    #Puede tener sus campos propios
    name = serializers.CharField(max_length=200)
    email = serializers.EmailField()
    
    #Método para validaciones (validate_nombreCampo)
    def validate_name(self,value):
        if value == 'Nahuel': 
            raise serializers.ValidationError('El nombre no puede ser Nahuel')
        return value
    
    def validate_email(self,value):
        if value == '':
            raise serializers.ValidationError('Se debe indicar un correo')
        return value
    
    #valida/verifica toda la data al mismo tiempo
    def validate(self, data):
        if data['name'] in data['email']:
            raise serializers.ValidationError('El email no puede contener el nombre')
        return data
    
    #Para crear una instanciación con .save() una vez validada la data
    def create(self, validated_data):
        return User.objects.create(**validated_data) #En un model serializer utiliza self.model.objects....
    
    #PUT de alguna instancia (actualización)
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
    