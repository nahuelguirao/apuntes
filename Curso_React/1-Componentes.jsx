const titulo = 'Soy un titulo'

// Snipet ffc
function PrimerComponente() {
    return (
        <h1>Hola Mundo!</h1>
    );
}
export default PrimerComponente;  // import PrimerComponente from './PrimerComponente'


// Snipet rafc
export const PrimerComponente = () => {
    return (
        <>
            <h1>{titulo}</h1> {/* Recordar que todos los childs deber tener un padre por ello las <> vacías (puede ser un Fragment o un Div pero son viejos*/}
        </>
    )
}  // import { PrimerComponente } from './PrimerComponente'

//ACORDARSE DE IMPORTAR E INCLUIR EL COMPONENTE EN MAIN.JSX


// Metodo viejo (snipet cc)
// class PrrimerComponente extends Component {
//     state = {}
//     render() {
//         return (
//             <h1>Hola mundo!</h1>
//         );
//     }
// }

// export default PrrimerComponente;
