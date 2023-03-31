import './App.css'
import User from './components/User'
import Products from './components/Products'
import Categories from './components/Categories'
import MyContext from './context'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data.products))
  }, []);

  return (
    <div className="App">
      {products.map(e => (
        <h1>{e.title}</h1>
      ))}
    </div>
  )
}

export default App
