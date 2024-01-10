from . import Response
from . import status, viewsets # from rest_framework
from . import Product
from . import ProductSerializer

#Un viewset almacena toda la lógica de un CRUD dento de si mismo  gestionando los métodos HTTP a través de métodos propios
class ProductViewSet(viewsets.ModelViewSet): #IMPORTANTEEE! ModelViewSet tiene los métodos HTTP predefinidos (si uso ViewSet solo hay que definir c/u individualmente)
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        return Product.objects.filter(state=True)
    
    #Un viewset tiene metodos list - create - retrieve - update - partial_update - destroy (y podemos reescribirlos) !IMPORTANTE USAR ESOS NOMBRES
    def create(self,request):
        new_product = self.serializer_class(data= request.data)
        if new_product.is_valid():
            new_product.save()
            return Response({'message':'Producto creado correctamente'}, status= status.HTTP_201_CREATED)
        return Response(new_product.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, pk=None):
        product = Product.objects.filter(id=pk).first()
        if product:
            product.state = False
            product.save()
            return Response({'message':'Producto eliminado correctamente'}, status=status.HTTP_200_OK)
        
        return Response({'message':'Producto no encontrado'}, status=status.HTTP_404_NOT_FOUND)
    

# RECORDAR actualizar las routes