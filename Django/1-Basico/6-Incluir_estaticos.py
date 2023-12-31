# 1° Configura los archivos estaticos en el config 
STATIC_URL = 'static/'

STATICFILES_DIRS = [BASE_DIR/'prueba/static'] # <= Rutas donde buscar los archivos

# 2° En la plantilla cargo archivos staticos con:
# {% load static %}

# 3° Import los archivos así:
# <link rel="stylesheet" href="{% static 'style.css' %}">
