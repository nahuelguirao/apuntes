#DESDE LA VISTA

from django.http import HttpResponse
from .forms import FormPrueba

def ValidacionForms(request):
    if request.method == 'GET':
        return #....
    if request.method == 'POST':
        #¿Como validar si un form esta llenado correctamente? .isvalid
        form = FormPrueba(request.POST) #Llena el form con los datos recibidos
        if form.is_valid():
            return HttpResponse('Exito')
        else:
            return HttpResponse('Falló la validación')

#DESDE FORMS

from django import forms

class FormPrueba(forms.Form):
    pass
    #Como agregar una validación extra a un formulario
    def filtro_nombre(self):
        nombre = self.filtro_nombre.get('nombre')
        if nombre != 'Nahuel':
            #Manda el error
            raise forms.ValidationError('El nombre puede ser solo Nahuel')
        else:
            #Si todo ok retorna el valor
            return nombre