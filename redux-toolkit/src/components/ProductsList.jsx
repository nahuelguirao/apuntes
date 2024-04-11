import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { readProducts, deleteProduct, updateProduct } from '../redux/slices/productsSlice'

export function ProductsList() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(res => { dispatch(readProducts(res.data)) })
            .catch(err => console.error(err))
    }, [dispatch])

    const handleDelete = (id) => dispatch(deleteProduct(id))
    const handleUpdate = (id) => dispatch(updateProduct(id))

    return (
        <>
            <h3>Products</h3>
            {products.map(p => (
                <div key={p.id}>
                    <p>{p.name} ({p.done ? 'COMPLETED' : 'PENDING'})</p>
                    <button onClick={() => handleUpdate(p.id)}>Change status</button>
                    <button onClick={() => handleDelete(p.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}