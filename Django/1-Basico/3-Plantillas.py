#Recordar establecer las rutas de los templates en el settings.py
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['prueba/templates'], # ==> Acá
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

#Creo una vista y renderizo la plantilla con render
#Render permite renderizar un template (plantilla html)
from django.shortcuts import render


def simple(request):
    #3 Parametros para el render: 1°Request 2°Plantilla 3°Contexto (datos extra)
    return render(request, 'simple.html', {}) 

#Genero el path
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('simple/', views.simple, name='simple')
]