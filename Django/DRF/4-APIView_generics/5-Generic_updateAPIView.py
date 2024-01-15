from . import Response
from . import status, generics
from . import Product
from .import ProductSerializer

#Actualiza un objeto mediante métodos PUT Y PATCH
class ProductUpdateAPIView(generics.UpdateAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        return Product.objects.filter(state=True)
    
    #Personalizando el método patch y put 
    def patch(self, request, pk=None):
        product = Product.objects.filter(id=pk).first()
        
        if product:
            edited_product = self.serializer_class(product)
            return Response(edited_product.data, status=status.HTTP_200_OK)
        
        return Response({'error':'No se encontró el producto'}, status = status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk=None):
        #.....
        pass