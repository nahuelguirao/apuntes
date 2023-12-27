#DESDE UN ARCHIVO forms.py dentro de una app

from django.forms import ModelForm #Importo ModelForm
from .models import Employee

#Por convención se pone primero el nombre del modelo y luego 'form'
class EmployeeForm(ModelForm):
    class Meta:
        model = Employee #Indico al modelo que va a hacer referencia el formulario
        fields = ['name','email'] #Especifico que campos del modelo quiero incluir en el form
        fields = '__all__' # Para que directamente use TODOS los campos
        
        extra_fields = ['pretended_salary'] #Agregar algun campo de datos
        
        exclude = ('email',) # Para excluir algún campo