import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export function UserView() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>List of users</h2>
            {users.map(u => (
                <h5>
                    {u.email}
                </h5>
            ))}
        </div>
    )
}