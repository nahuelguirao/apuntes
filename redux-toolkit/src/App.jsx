import { useState } from "react";
import { ProductsList } from "./components/ProductsList";
import { useDispatch } from 'react-redux'
import { createProduct } from "./redux/slices/productsSlice";
import axios from 'axios'

function App() {
  const [newProductName, setNewProductName] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: crypto.randomUUID(),
      name: newProductName,
      done: false,
    }

    axios.post('http://localhost:3001/products', newProduct)
      .then(() => {
        dispatch(createProduct(newProduct))
        setNewProductName("")
      })
      .catch((err) => console.error(err))
  }
  return (
    <>
      <h1>Hola Chaval!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product name:</label>
        <input
          type="text"
          placeholder="Iphone 19..."
          id="name"
          name="name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button>Add</button>
      </form>
      <ProductsList />
    </>
  );
}

export default App;
