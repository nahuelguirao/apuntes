from rest_framework import serializers
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = '__all__' #Aquí se ponen los campos que se van a querer editar/crear (a diferencia de to_representation)
    
    #Que campos se mostraran visualmente en listados de objetos de un modelo ('representativamente')
    def to_representation(self, instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'last_name': instance.last_name,
            'email':instance.email,
        }
        
#RECORDAR QUE LA FORMA + ÓPTIMA ES ENVIAR DESDE LA API_VIEW LOS VALUES ESPECIFICOS EN DICCIONARIO y aca en el to_representation enviarlos como instance['nombreCAMPO']