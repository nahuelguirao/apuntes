const comments: any[] = [];

interface props {
  params: {
    id: string;
  };
}

export async function PATCH(request: Request, { params }: props) {
  //Convierte a JSON toda la request
  const data = await request.json();
  const { text } = data; //Obtengo el valor que quiero del body

  const index = comments.findIndex((c) => c.id == parseInt(params.id));

  comments[index].body = text;

  return Response.json(comments[index]);
}
