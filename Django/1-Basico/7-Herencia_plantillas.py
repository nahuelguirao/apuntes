# En la plantilla base establezco 'bloques'
# ejemplo: {% block content %} {% endblock %} IMPORTANTE! puede ser de styles / title o lo que sea necesario

#Luego en la plantilla hija extraigo lo que ya tengo como base 
{% extends './rutaDelLayoutBase' %}

#Y lleno el contenido de los bloques que quiera
{% block content %}
<h4>Esto es un bloque hijo</h4>
{% endblock %}


#Tambien se puede usar INCLUDE para incluir bloques mas pequeños y atomizar aún mas el código
{% include 'nombrePlantilla' %}