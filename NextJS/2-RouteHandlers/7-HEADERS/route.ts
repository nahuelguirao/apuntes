const headers = (): any => {};

//import { headers } from "next/headers";

export async function GET() {
  //Con headers() podemos armar un objeto con todos los headers del request
  const headerList = headers();
  const authorization = headerList.get("Authorization");

  return Response.json(authorization);
}
