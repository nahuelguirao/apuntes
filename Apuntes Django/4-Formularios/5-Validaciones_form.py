from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(
        label='Nombre:',
        widget=forms.TextInput(attrs={'class': 'input'}) 
        )
    email = forms.EmailField(
        label='Email:',
        widget=forms.EmailInput(attrs={'class':'input'}) 
        )
    
    #Para hacer validaciones extra de este formulario (como metodos del objeto):
    def clean_name(self):
        name = self.cleaned_data.get('name') #Esto para obtener el valor obtenido una vez enviado los datos
        if name == 'Nahuel': 
            raise forms.ValidationError('Error, el nombre no puede ser Nahuel.') #Envio un error

        return name #Si pasa las verificaciones se retorna el nombre
        

#En la vista verifico el form.is_valid: 
from django.shortcuts import render
from django.http import HttpResponse
from .forms import ContactForm

def widget(request):
    if request.method == 'GET':
        form = ContactForm()
        return render(request, 'widget.html', {'form': form})
    
    #Validación de datos con method = POST
    if request.method == 'POST':
        form = ContactForm(request.POST) #Genero un formulario con todos los datos enviados
        #Manejo el form con is_valid para verificar que esta ok
        if form.is_valid(): # <= IMPORTANTE
            return HttpResponse('Valido')
        else:
            return render(request, 'widget.html', {'form':form})