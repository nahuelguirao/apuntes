export const dynamic = "force-dynamic"; //Config

export async function GET() {
  //Si realizamos esta response en producción se quedara cacheada (guardada) y no se actualizará, por ello la configuración
  return Response.json({
    date: new Date().toLocaleTimeString(),
  });
}

//video: https://www.youtube.com/watch?v=5_cJFYZSiDM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=43
