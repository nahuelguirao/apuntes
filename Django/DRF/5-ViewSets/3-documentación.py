#DENTRO DEL URL DEL PROYECTO BASE

# pip install drf-yasg  (y agregarla a las apps en el setting)
from django.contrib import admin
from django.urls import path, include
from . import permissions #From rest_framework
from . import get_schema_view #From drf_yasg.views
from . import openapi #From drf_yasg

#Configuración base de la documentación
schema_view = get_schema_view(
   openapi.Info(
      title="Documentación API",
      default_version='v0.1',
      description="Documentación pública de API de Ecommerce",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="nahuelguirao@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    #Resto de urls
    path('admin/', admin.site.urls),
    path('users/', include('users.api.urls')),
    path('products/', include('products.api.routers')),
]

#DOCUMENTACIÓN
# https://drf-yasg.readthedocs.io/en/stable/index.html


#Para hacer comnentarios hay que usar """""" dentro de un método