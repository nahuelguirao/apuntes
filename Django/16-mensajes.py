from django.shortcuts import render
from django.contrib import messages

# Distintos tipos de mensajes/alertas 
def mensaje(request):
    messages.success(request, 'Soy un mensaje exitoso.')
    return render(request, 'messages.html', {})

#Luego en la plantilla:
{% if messages %}
<ul class="messages">
    {% for message in messages %}
    <li{% if message.tags %} class="{{ message.tags }}"{% endif %}>{{ message }}</li>
    {% endfor %}
</ul>
{% endif %}