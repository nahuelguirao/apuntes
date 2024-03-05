import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products" replace>
        Products
      </Link>
    </main>
  );
}

//Si al link se le agrega el atributo replace borra el historial de la navegación en cache
