const comments: any[] = [];

interface props {
  params: {
    id: string;
  };
}

//Las rutas dinamicas en los routehandlers se manejan igual que las rutas normales
//Creando la carpeta y nombrandola [parametroDinamico]
export async function GET(request: Request, { params }: props) {
  const comment = comments.find((c) => c.id === parseInt(params.id));

  return Response.json(comment);
}
