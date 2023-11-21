import { useFetch } from "../hooks/useFetch"

export const CompFetch = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h1>USUARIOS: </h1>
            {
                isLoading
                    ? <h4>Cargando...</h4>
                    : errors
                        ? <p>Ha ocurrido un error: {errors}</p>
                        : <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.website}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
            }
        </>
    )
}
