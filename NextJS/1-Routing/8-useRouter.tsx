"use client"; //Importante utilizar un client component

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter(); //Genera el router

  const handleClick = () => router.push("/"); //Navega a la ruta home
  // router.replace(ruta) => cambiaria todo el URL
  // router.back() => navega al previous URL del stack
  // router.forward() => navega a la siguiente pagina del stack
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
