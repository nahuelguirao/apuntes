#Dentro del admin.py de una app
from django.contrib import admin
from .models import Products

# Register your models here.
admin.site.register(Products) #Se le pasa el modelo al cual queremos registrar 