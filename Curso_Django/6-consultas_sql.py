from django.shortcuts import render
#IMPORTANTE importar los modelos necesarios
from .models import modeloEjemplo

# Create your views here.
def queries(request):
    #Obtener TODOS los elementos (Devuelve una LISTA)
    todos_los_objetos = modeloEjemplo.objects.all()
    
    
    #Filtrar por una condición (poniendola como parametro)
    filtro = modeloEjemplo.objects.filter(nombre='Nahuel') #.first()
    #Se puede agregar .first() en caso de que queramos un único elemento
    
    
    #Si ya sabemos que vamos a obtener un único objeto
    objeto_unico = modeloEjemplo.objects.get(id=1)
    
    
    #Como usar limit (se puede usar con filter tambien por ejemplo)
    limitar = modeloEjemplo.objects.all()[:10]
    #Traeria los 10 primeros resultados
    
    
    #Como saltear un elemento con un limit (offset)
    off_set = modeloEjemplo.objects.all()[2:10]
    #Traeria 10 resultados saltando los primeros 2}
    
    
    #¿Como hacer un ORDER BY? concatenando .order_by(parametro)
    order_by = modeloEjemplo.objects.all().order_by('email')
    
    
    #Consulta con operadores lógicos >= <= etc
    filtro2 = modeloEjemplo.objects.filter(id__lte = 13)
    # __lte (menor o igual)
    # __gte (mayor o igual)
    # __lt (menor)  __gt (mayor)
    # __contains (contiene)  __exact (exacto)