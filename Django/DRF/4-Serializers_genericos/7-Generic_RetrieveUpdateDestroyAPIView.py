from . import Response
from . import status, generics
from . import Product
from . import ProductSerializer

#Permite ahorrarnos tener una clase de vista tanto para un retrieve como para updatear/patchear como un delete de un objeto
class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        return Product.objects.filter(state=True)
    
    #Redifino el update
    def patch(self, pk=None):
        product = Product.objects.filter(id=pk).first()
        
        if product:
            edited_product = self.serializer_class(product)
            return Response(edited_product.data, status=status.HTTP_200_OK)
        
        return Response({'error':'No se encontró el producto'}, status = status.HTTP_404_NOT_FOUND)
    
    #Redefino el método delete
    def delete(self,request, pk=None):
        product = Product.objects.filter(id=pk).first()
        if product:
            product.state = False
            product.save()
            return Response({'message':'Producto eliminado correctamente'}, status=status.HTTP_200_OK)
        
        return Response({'message':'Producto no encontrado'}, status=status.HTTP_404_NOT_FOUND)