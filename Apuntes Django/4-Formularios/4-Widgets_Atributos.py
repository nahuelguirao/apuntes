from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(
        label='Nombre:',
        widget=forms.TextInput(attrs={'class': 'input'}) #Agregandole un atributo a un input especifico del formulario con attrs
        )
    email = forms.EmailField(
        label='Email:',
        widget=forms.EmailInput(attrs={'class':'input'}) #Tambien se puede especificar que tipo de input queremos forms.TipoDeInput
        )