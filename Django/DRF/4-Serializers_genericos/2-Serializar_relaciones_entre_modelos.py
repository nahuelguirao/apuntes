from . import serializers  #from rest_framework

class ProdcutSerializer(serializers.ModelSerializer):
    #Para evitar que algun campo que este relacionado con otro modelo (foreign key) muestre el id sino el METODO STR del modelo con el que se relaciona
    measure_unit = serializers.StringRelatedField()
    category_product = serializers.StringRelatedField() # Se usa serializers.StringRelatedField()
    
    class Meta: 
        model = '' #Modelo 
        exclude = ('state','created_date','modified_date','deleted_date')



class CategoryProduct():
    # description = models.CharField('Description', max_length=50, unique=True, null=False, blank=False)
    # historical = HistoricalRecords()
        
    # class Meta:
    #     verbose_name = 'Product category'
    #     verbose_name_plural = 'Products categories'
    
    def __str__(self):
        return self.description # <= Retornaria ESTO !