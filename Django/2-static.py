# CONFIGURACIÓN 

STATIC_URL = 'static/'

STATICFILES_DIRS = [BASE_DIR / 'nombre_del_directorio',] 

# ¿Como se linkea un archivo estatico en una plantilla?

{% load static %} #Al principio de la plantilla

{% static 'nombre.css/js' %} #Hacer referencia al archivo estatico
