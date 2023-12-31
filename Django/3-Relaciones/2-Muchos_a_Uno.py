from django.db import models

# Relación UNO A MUCHOS
class Reporter(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    
    def __str__(self):
        return self.name
    
class Article(models.Model):
    headline = models.CharField(max_length=100)
    publish_date = models.DateField()
    reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE) #Como un articulo solo puede tener un reportero es a los cuales se le asocia la foreign key
    #Un Article esta asociado a un solo reportero pero un reportero puede tener muchos articulos
    
    def __str__(self):
        return self.headline
    

#En una vista para obtener todos los articles que escribio un reportero:
# rep = Reporter(name='Nahuel', email='na@gmai.com)
# rep.save()

# (creo los articulos)...

# result = rep.article_set.all()  <= ACÁ CON _set.algunMetodo() obtengo la info
# result = rep.article.filter(id=1)