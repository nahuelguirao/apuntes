#Defino el modelo

from django.db import models

class EjemploModelo(models.Model):
    nombre = models.CharField(max_length=50)
    email = models.EmailField(null=False)

    def __str__(self):
        return self.nombre

#Defino el form a partir del modelo

from django.forms import ModelForm
#Importar el modelo
from .models import EjemploModelo

#Por convención se pone el nombre del modelo seguido de Form
class EjemploModeloForm(ModelForm):
    class Meta:
        #Se vincula el modelo
        model = EjemploModelo
        #Especificar los campos que quiero utilizar de dicho modelo
        fields = ['nombre','email']
        #Si quiero utilizar todos los fields puedo usar '__all__'
        #Si quiero excluir un field
        exclude = ['email',]