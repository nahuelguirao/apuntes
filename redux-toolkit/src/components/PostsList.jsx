import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/slices/postsSlice'

export function PostsLists() {
    const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => dispatch(fetchPosts(res.data)))
            .catch(err => console.error(err))
    }, [dispatch])

    return (
        <>
            <h3>Posts</h3>
            {posts.map(p => (
                <div key={p.id}>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                </div>
            ))}
        </>
    )
}