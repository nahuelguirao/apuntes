#Dentro del admin.py de una app
from django.contrib import admin
from .models import Product

#Para configurar un modelo en especifico 
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'description') #Determina que campos seran visibles a primera vista en el admin

admin.site.register(Product, ProductAdmin) #Se le pasa el modelo al cual queremos registrar 


