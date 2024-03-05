const cookies = (): any => {};

// import { cookies } from "next/headers";

export async function GET() {
  //con cookies() gestionamos

  //creando una cookie
  cookies().set("resultPerPage", "20");

  //obteniniendo una cookie
  const result = cookies().get("resultPerPage");

  //Tambien hay metodos hasAll, delete...

  return Response.json(result);
}
