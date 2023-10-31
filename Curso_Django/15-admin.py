# py manage.py createsuperuser > Para crear un superusuario 

class NombreDelModelo():
    pass

from django.contrib import admin
#Como visibilizar modelos desde el admin
#Desde el modulo admin.py de una app IMPORTAR el modelo y luego:

admin.site.register(NombreDelModelo)
