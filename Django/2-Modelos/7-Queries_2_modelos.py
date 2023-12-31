from django.shortcuts import render
from .models import Author

# Create your views here.
def queries(request):
    
    order_by = Author.objects.all().order_by('email') # Ordena en base a un parametro
    
    conditional_operators = Author.objects.filter(id__lte = 15) #Busca los ID menores o iguales a 15 se pasa primero parametor y luego operador lógico
    # __lte : menor o igual  /  __gte : mayor o igual / __lt : menor  / __gt : mayor
    
    contains_something = Author.objects.filter(name__contains = 'joe') #Busca de los 'names' los que contienen 'joe'
    
    return render(request, 'index.html', {})