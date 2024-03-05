const comments: any[] = [];
const redirect = (route: string) => {};
interface props {
  params: {
    id: string;
  };
}
// --------------------------

export async function GET(request: Request, { params }: props) {
  //Se puede utilizar redirect => import { redirect } from "next/navigation"; => se le pasa la ruta y automaticamente redirecciona si cumple la condición
  if (parseInt(params.id) > comments.length) {
    redirect("/comments");
  }

  return Response.json("Hello");
}
