//Pueden ser configurados en layouts o pages

//Export como const metadata
export const metadata = {
  title: "About page",
};

export default function About() {
  return <h1>About</h1>;
}

//Generar metadata dinamica
import { Metadata } from "next";

interface props {
  params: {
    productId: string;
  };
}

export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `Product #${params.productId}`,
  };
};

export default function ProductDetails({ params }: props) {
  return <h1>Product detail #{params.productId}</h1>;
}

//VIDEO : https://www.youtube.com/watch?v=yE_y4EBq-EA&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=17

//Los metadata tienen un campo template que puede ser utilizado como base
// video: https://www.youtube.com/watch?v=1OqftoKO2V0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=18
