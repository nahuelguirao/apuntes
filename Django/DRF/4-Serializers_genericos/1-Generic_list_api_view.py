from . import generics #From rest_framework
from . import MeasureUnit, Indicator, CategoryProduct #Modelo/s
from . import MeasureUnitSerializer, IndicatorSerializer, CategoryProductSerializer #Serializer/s creado

#Generics.ListAPIView se usa para generar vistas que listen datos (que ya sabemos que van a retornar varios datos)
class MeasureUnitListAPIView(generics.ListAPIView):
    serializer_class = MeasureUnitSerializer #Le pasamos el serializer que le corresponde
    
    #Define el listado que trae con get_queryset
    def get_queryset(self):
        return MeasureUnit.objects.filter(state = True)

class IndicatorListAPIView(generics.ListAPIView):
    serializer_class = IndicatorSerializer #Le pasamos el serializer que le corresponde
    
    def get_queryset(self):
        return Indicator.objects.filter(state = True)
    
class CategoryProductListAPIView(generics.ListAPIView):
    serializer_class = CategoryProductSerializer #Le pasamos el serializer que le corresponde
    
    def get_queryset(self):
        return CategoryProduct.objects.filter(state = True)
    
    
# IMPORTANTE! en las vistas se definen con el nombre del APIView + .as_view()

from django.urls import path
from . import MeasureUnitListAPIView, IndicatorListAPIView, CategoryProductListAPIView #Vistas de la API 

urlpatterns = [
    path('measure_units/', MeasureUnitListAPIView.as_view(), name='measure_units'),
    path('indicator', IndicatorListAPIView.as_view(), name='indicator'),
    path('product_category', CategoryProductListAPIView.as_view(), name='product_category')
]