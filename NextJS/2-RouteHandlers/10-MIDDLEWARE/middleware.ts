type NextRequest = any;
const NextResponse: any = () => {};

//RECORDAR AGREGAR EL ARCHIVO middleware.ts en el SRC

// import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
    //Primer parametro la ruta que redirige y luego la url base
  }
}

//Tambien se podria hacer con un config y matcher (en lugar de andar verificando la URL)
export const config = {
  matcher: "/profile",
};

//Ejemplo de setear un theme
export function middleware2(request: NextRequest) {
  const response = NextResponse.next();

  //Intenta obtener el theme preference
  const themePreference = request.cookies.get("theme");

  //Theme x default
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //Si se quiere agregar un header
  response.headers.set("custom-header", "custom-value");

  return response;
}
