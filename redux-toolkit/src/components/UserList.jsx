import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux/slices/usersSlice'

export function UsersList() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => dispatch(fetchUsers(res.data)))
            .catch(err => console.error(err))
    }, [dispatch])

    return (
        <main>
            <h2>Users</h2>
            {users.map(u => (
                <div key={u.id}>
                    <h4>{u.username}</h4>
                    <p>{u.email}</p>
                </div>
            ))}
        </main>
    )
}