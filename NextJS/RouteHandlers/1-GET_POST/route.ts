//Los route handlers utilizan route.ts / route.js (en lugar de page)

const comments: any[] = []; //Simula datos de una DB

//Ejemplo GET
export async function GET() {
  const comments = [];
  return Response.json(comments);
}

//Ejemplo POST
export async function POST(request: Request) {
  const data = await request.json();

  const newComment = {
    id: comments.length + 1,
    body: data.body, //Data contiene todo el body de la request
  };

  comments.push(newComment);
  //Seteo la info transofrmada a json, headers y status
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
