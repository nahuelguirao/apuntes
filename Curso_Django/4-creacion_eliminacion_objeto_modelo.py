# 1° Importar en el modulo 'views' el modelo con el que trabajar 
from .models import modeloEjemplo

# En las vistas
def crear_objeto(request):
    #Creo un 'objeto' para dicho modelo
    nuevoObjeto = modeloEjemplo(name='Nombre del Objeto')
    #Se guarda 
    nuevoObjeto.save()
    
    
    #Forma directa sin tener que utilizar save(), se guarda directamente
    nuevoObjeto = modeloEjemplo.objects.create(name='Nombre del objeto')


def eliminar_objeto(request):
    #¿Como buscar un objeto? con .get(parametro)
    objeto = modeloEjemplo.objects.get(id=1)
    #Una vez obtenido se borra con .delete()
    objeto.delete()
    
    
    #Forma directa
    objeto = modeloEjemplo.objects.filter(id=2).delete()