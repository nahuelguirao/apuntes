from . import Response
from . import status, generics
from . import Product
from . import ProductSerializer

#Para obtener un ÚNICO objeto del modelo utilizamos Retrieve
class ProductRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    
    #Si quiero puedo modificar el método GET 
    
    def get_queryset(self):
        return self.get_serializer().Meta.model.objects.filter(state=True)

#IMPORTANTE! Para que retrieve funcione automaticamente hay que pasar en el URL la id con el nombre de 'pk'   
# path('get/<int:pk>', ProductRetrieveAPIView.as_view(), name='retrieve_product')  