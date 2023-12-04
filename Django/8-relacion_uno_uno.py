from django.db import models
#UNO A UNO

class Lugar(models.Model):
    nombre = models.CharField(max_length=50)
    address = models.TextField()
    
class Restaurante(models.Model):
    #Se especifica OneToOneField
    lugar = models.OneToOneField(Lugar, on_delete=models.CASCADE)
    n_empleados = models.IntegerField(default=1)
    #IMPORTANTE! al enlazar 'Lugar' puedo acceder a la data de 'Lugar'
    #desde un objeto 'Restaurante' ej: restaurante.lugar.nombre