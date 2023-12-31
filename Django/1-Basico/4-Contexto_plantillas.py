def dinamico(request, nombre): #Recibe el nombre por la url en este caso
    context = {'nombre': nombre}
    return render(request, 'dinamico.html', context)

#Al pasarle el contexto dentro de la plantilla html se utiliza así:
# =>  {{nombre}}


