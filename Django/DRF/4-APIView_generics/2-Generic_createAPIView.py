from . import Response
from . import status
from . import generics
from . import Product #Modelo
from . import ProductSerializer #Serializador de un modelo

#Para creación de objetos individualmente utilizamos generics.CreateAPIView
class ProductCreateAPIView(generics.CreateAPIView):
    serializer_class = ProductSerializer
    
    #AQUÍ estoy sobreescribiendo el metodo POST para enviar mensaje peronsalizado
    def post(self,request):
        serializer = self.serializer_class(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Producto creado correctamente'}, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)