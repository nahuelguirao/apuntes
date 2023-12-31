from django.db import models

# Relacion MUCHOS A MUCHOS
class Publication(models.Model):
    title = models.CharField()
    
    def __str__(self):
        return self.title

class Article(models.Model):
    headline = models.CharField()
    publications = models.ManyToManyField(Publication) # <= Many to many se le pasa el modelo con el cual se relaciona 
    #Una publicacion puede estar en muchos articulos y un articulo puede tener muchas publicaciones
    
    def __str__(self):
        return self.headline
    
#IMPORTANTE importar los modelos necesarios
from .models import Publicacion, Articulo

# Create your views here.
def queries_muchos_muchos(request):
    #Se necesita que previamente ya los 2 elementos
    #esten previamente guardados para poder relacionarlos
    #en relaciones muchos a muchos
    art1 = Articulo(encabezado='Encabezado1')
    art1.save()
    art2 = Articulo(encabezado='Encabezado2')
    art2.save()
    art3 = Articulo(encabezado='Encabezado3')
    art3.save()
    
    pub1 = Publicacion(titulo='Pub1')
    pub1.save()
    pub2 = Publicacion(titulo='Pub2')
    pub2.save()
    pub3 = Publicacion(titulo='Pub3')
    pub3.save()
    pub4 = Publicacion(titulo='Pub4')
    pub4.save()
    pub5 = Publicacion(titulo='Pub5')
    pub5.save()

    #¿Como vincular? YA GUARDADOS con .add()
    art1.publicaciones.add(pub1)
    art3.publicaciones.add(pub2)
    art1.publicaciones.add(pub3)
    art2.publicaciones.add(pub4)
    art2.publicaciones.add(pub5)
    art2.publicaciones.add(pub2)
    art3.publicaciones.add(pub2)
    
    #Consulta para el modelo que tiene la relacion many to many
    resultado = art1.publicaciones.all()
    
    #Consulta para el que no lo tiene
    pub2= Publication.objects.get(id=2)
    resultado2 = pub2.articulo_set.all()
    
    #¿Como eliminar una relacion? .remove()
    art1.publicaciones.remove(pub1)