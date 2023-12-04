# 1-Crear un modulo 'forms.py' en una app Django

from django import forms

class FormularioPrueba(forms.Form):
    #Lo mismo que un modelo pero utilizando form.
    nombre = forms.CharField(label='Ingrese su nombre...', max_length=100, help_text='100 caracteres máximo')
    url = forms.URLField(label='Tu sitio web...', required=False)
    comentario = forms.Textarea()

# 2-Se importa el formulario a 'views.py' y se lo utiliza en una vista dentro del contexto 

# 3-Al tenerlo dentro del contexto utilizarlo en una plantilla {{ nombre.as_div }}


# ¿Como pasar valores o editarlos? para un CRUD x ejemplo
#En views.py
def prueba(request):
    objeto_editado = FormularioPrueba({'nombre':'Nahuel', 'comentario':'Esto es un comentario'})
#Esos serian los valores que tendria el formulario forzadamente 