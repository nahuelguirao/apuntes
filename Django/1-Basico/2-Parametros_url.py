#Se utiliza la estructura: <tipo_variable:nombre> 

#En la pestaña de url  => <tipoDato:nombreVarialbe>
urlpatterns = [
    path('adulto/<int:edad>', views.adulto, name='adulto')
]

#En la pestaña de views se pasa como parametro la variable
def adulto(request, edad):
    if edad >= 18:
        print('Es mayor de edad')
    else:
        print('No es mayor de edad')