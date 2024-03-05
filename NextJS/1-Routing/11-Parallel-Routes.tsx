//Las paralel routes utilizan 'slots' (elementos del dashboard o layout a mantener)
//Para definir un slot se utiliza @nombre con su respectivo page.tsx

//La principal ventaja es poder utilizar y gestionar cada slot en especifico (haciendo sus propios loaders y demas)
//haciendo que si un slot tarda en cargar mas que otro no hace que toda la app este a la espera

import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  users,
  notifications,
  revenue,
}: {
  children: ReactNode;
  users: ReactNode;
  notifications: ReactNode;
  revenue: ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div>
        {users}
        {notifications}
      </div>
      <div>{revenue}</div>
    </>
  );
}

//Users, notifications y revenue son slots con sus carpetas @nombre y su correspondiente page

//Video: https://www.youtube.com/watch?v=8I5-OTNOni0&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=28

//Unmatched routes: https://www.youtube.com/watch?v=NPtnJ6Ivv9k&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=29
