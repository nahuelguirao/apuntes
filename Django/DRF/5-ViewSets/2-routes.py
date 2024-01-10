from . import DefaultRouter #From rest_framework.routers
from . import ProductViewSet #Viewset generado por nosotros 

router = DefaultRouter() #Instancio el router

#Registramos el nombre de la ruta que quermos que aparezca en la URL y le enlazamos el viewset
router.register(r'product', ProductViewSet, basename= 'Product') 

urlpatterns = router.urls