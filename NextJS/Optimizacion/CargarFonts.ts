//Next tiene predeterminado varias fuentes
//Optimiza la fuente y la renderiza desde el lado del servidor
import { Acme } from "next/font/google";

export const acme = Acme({ subsets: ["latin"], weight: "400" });

//Luego se utilizan en un page/layout como classname asi:

// return (
//   <html lang="en">
//     <body className={`${acme.className}`}>{children}</body> // <== AQUÍ
//   </html>
// );
