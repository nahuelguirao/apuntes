from django.db import models

class ModeloUsuarios(models.Model):
    username = models.CharField(max_length=255, null=False) #Texto normal (con max length)
    age = models.IntegerField(default=18) #Numeros
    description = models.TextField() #Texto largo
    birth_date = models.DateField() #Fechas
    
    def __str__(self):
        return self.username # str para mostrar la referencia a cada elemento del modelo

    
#RECORDAR! hacer las migraciones una vez provocado los cambios
