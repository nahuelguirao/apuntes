const comments: any[] = [];
interface NextRequest {}

//IGNORAR EL ANY es NextRequest  => import { NextRequest } from "next/server";
export async function GET(request: NextRequest | any) {
  //Obtiene todos los queries que se pasen en la url
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("filter"); //Obtiene por nombre de query

  const filteredComments = query
    ? comments.filter((c) => c.body.includes(query))
    : comments;

  return Response.json(filteredComments);
}
