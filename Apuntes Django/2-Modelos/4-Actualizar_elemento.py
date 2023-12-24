from django.shortcuts import render
from .models import Author

def update(request):
    author = Author.objects.get(id=1) #Obtengo el elemento 
    author.name = 'Nahuel' #Actualizo algún campo
    author.email = 'na@gmail.com'
    author.save() #Guarda los cambios
    
    return render(request, 'index.html', {})