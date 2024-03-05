interface props {
  params: {
    productId: string;
  };
}

//Las rutas dinamicas se establecen con [parametroDinamico] y se desestructuran en el componente con params
export default function ProductDetails({ params }: props) {
  return <h1>Product detail {params.productId}</h1>;
}
