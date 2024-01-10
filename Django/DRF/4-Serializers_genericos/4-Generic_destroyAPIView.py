from . import Response
from . import status, generics
from . import Product
from . import ProductSerializer

#Toma el método HTTP DELETE y ELIMINA DEL MODELO el objeto
class ProductDestroyAPIView(generics.DestroyAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        return Product.objects.filter(state=True)
        
    #Para solo cambiar el state del producto (y no eliminarlo del modelo)
    def delete(self,request, pk=None):
        product = Product.objects.filter(id=pk).first()
        if product:
            product.state = False
            product.save()
            return Response({'message':'Producto eliminado correctamente'}, status=status.HTTP_200_OK)
        
        return Response({'message':'Producto no encontrado'}, status=status.HTTP_404_NOT_FOUND)