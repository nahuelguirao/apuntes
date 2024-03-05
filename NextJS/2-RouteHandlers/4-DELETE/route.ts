const comments: any[] = [];

interface props {
  params: {
    id: string;
  };
}

export async function DELETE(request: Request, { params }: props) {
  const index = comments.findIndex((c) => c.id === parseInt(params.id));

  const deletedComment = comments[index];
  comments.splice(index, 1);

  return Response.json(deletedComment);
}
