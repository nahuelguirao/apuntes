//La ruta tiene que estar en el app principal con el nombre not-found.tsx

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>Try another route</p>
    </div>
  );
}

//En caso de querer hacer un notFound especifico para una ruta:
import { notFound } from "next/navigation";

interface props {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: props) {
  if (parseInt(params.productId) > 1000) {
    notFound(); //Ejecuta el enrutamiento hacia el not found mas profundo (es decir el que sea mas especifico, no el mas general del APP)
  }

  return <h1>Product detail #{params.productId}</h1>;
}
