#Como relacionar un modelo con otro?

from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE) # <= Aquí establezco relación como foreing key (se le indica la clase a la que hace referencia)
    #models.CASCADE hace referencia que si se elimina un autor eliminara todos los 'post' relacionados al mismo
    def __str__(self):
        return self.title