from . import Response
from . import status, generics
from . import Product
from . import ProductSerializer

#Con esta forma nos evitamos tener 2 vistas de clase distintas para listar y crear 
class ProductListCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    #Cuando utilizamos ListCreateAPIView tenemos que definir el query_set (para listar los objetos) y para cuando utilice el método GET
    queryset = Product.objects.filter(state = True) #Tambien se puede hacer un método def query_set si queremos algo mas extenso
    
    #Y cuando utliza el método POST: 
    def post(self,request):
        new_product = self.serializer_class(data= request.data)
        if new_product.is_valid():
            new_product.save()
            return Response({'message':'Producto creado correctamente'}, status= status.HTTP_201_CREATED)
        return Response(new_product.errors, status=status.HTTP_400_BAD_REQUEST)