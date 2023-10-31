from django import forms

class EjemploForm(forms.Form):
    #WIDGETS primero poner Tipo de input y luego attrs={} para cambiar sus atributos 
    nombre = forms.CharField(label='Nombre:', max_length=50,
                             widget=forms.TextInput(attrs={'class':'nombre-clase'}))
    
    comentario = forms.CharField(label='Comentario:', widget=forms.Textarea(attrs={'class':'nombre-clase'}))