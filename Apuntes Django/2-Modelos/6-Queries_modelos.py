from django.shortcuts import render
from .models import Author, Post

# Create your views here.
def queries(request):
    #Los elementos obtenidos luego los podemos pasar al contexto de una plantilla
    
    authors = Author.objects.all() #OBTIENE TODOS LOS ELEMENTOS
    
    specific_author = Author.objects.filter(email='nahuelguirao@gmail.com') #FILTRA ELEMENTO/S DE ACUERDO A UN FILTRO
    
    unique_author = Author.objects.get(id=1) #OBTIENE UN ÚNICO ELEMENTO (Si son varios obtiene el primero)
    
    limit = Post.objects.all()[:5] #LIMITA LA BUSQUEDA A 5 resultados con [:limit]
    
    off_set = Post.objects.all()[2:5] #SALTEA LOS PRMEROS 2 RESULTADOS y LUEGO LIMITA A 5
    
    return render(request, 'index.html', {'authors':authors})