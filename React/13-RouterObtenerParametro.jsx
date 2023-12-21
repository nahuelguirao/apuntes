// 1° Al establecer la ruta se pasa :'lo que quiero obtener'
<Route path='tvseries/:id' element={<SerieDetails />} />

// 2° Para obtener dentro de un componente el parametro de la url se utiliza useParams()
import { useParams } from "react-router-dom"
const { id: movieId } = useParams()