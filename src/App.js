import Header from "./components/Header"
import Products from "./components/Products"
import AddProduct from "./components/AddProduct"
import { useState } from "react"


function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [products, setProducts] = useState([
    {
        id: 1,
        text: 'Chocolate',
        category: 'Sweets'
    },
    {
        id: 2,
        text: 'Cucumber',
        category: 'Vegetable'
    },
    {
        id: 3,
        text: 'Apple',
        category: 'Fruits'
    }
])

  // Delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  // Add product
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newProduct = { id, ...product }
    setProducts([...products, newProduct])
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAdd(!showAdd)}
      title='My shopping list'/>
      {showAdd && <AddProduct onAdd={addProduct} />}
      {products.length > 0 ? <Products products={products}
      onDelete={deleteProduct}/> : 'Your shopping list is empty'}
    </div>
  );
}

export default App;
