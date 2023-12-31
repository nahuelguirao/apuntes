from django.contrib import admin
from .models import Product

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_description', 'stock') #Se pasan los campos del modelo que queremos que se vean desde el admin
    search_fields = ('name', 'short_description') #Campos por los cuales se podra hacer la busqueda
    list_filter = ('name') #Muestra filtros para un campo en particular
    
admin.site.register(Product, ProductAdmin) #Se le pasa el modelo al cual queremos administrar
