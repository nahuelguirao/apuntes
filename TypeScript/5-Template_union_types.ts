//Tipado personalizado ed UUID
type HeroId = `${string}-${string}-${string}-${string}`;

//Con los `` podemos enlazar tipados para generar otros tipados personalizados (TEMPLATE UNION TYPES)
type HexadecimalColor = `#${string}`;

let idThor: HeroId = crypto.randomUUID(); //Cumple el requisito

let color: HexadecimalColor = "#091a";
