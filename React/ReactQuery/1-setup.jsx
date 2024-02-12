// npm i @tanstack/react-query
// npm i @tanstack/react-query-devtools

//En la app general agregar el provider
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient() //Instancia un nuevo cliente

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools /> {/*Agrega ayuda en desarrolo */}
        </QueryClientProvider>
    </React.StrictMode>,
)