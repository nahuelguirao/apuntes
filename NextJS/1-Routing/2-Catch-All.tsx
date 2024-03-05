//Para manejar CUALQUIER ruta que contenga un segmento podemos hacer
// carpeta docs => [...slug] => page.tsx

//Hara que cualquier URL que contenga la palabra 'docs' le devolverá este componente
interface props {
  params: {
    slug: string[];
  };
}

export default function Docs({ params }: props) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  }

  if (params.slug?.length === 1) {
    return <h1>Viewving docs for feature {params.slug[0]}</h1>;
  }

  return <h1>Docs</h1>;
}

//IMPORTANTE! SI queremos que funcione el retorno de solo 'docs' la carpeta tiene que tener [[...slug]] (dos corchetes) y confirmar con ? el slug

//La ventaja de usar un catch all route es para tener 1 sola page que maneje un monton de rutas dinamicas
