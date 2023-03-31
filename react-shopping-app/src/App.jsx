import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [darkmode, setDarkmode] = useState(false);

  function handleDarkMode() {
    setDarkmode(!darkmode)
  }

  function getProducts() {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err))
  }


  function getCategories(event, category) {
    event.preventDefault();
    const filtered = products.filter((produit) => produit.category === category)

    setFilteredProducts(filtered);
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div className="App">
      <Navbar getCategories={getCategories} handleDarkMode={handleDarkMode} />
      <Hero setFilteredProducts={setFilteredProducts} />
      <Products darkmode={darkmode} products={products} filteredProducts={filteredProducts} />
    </div>
  )
}

export default App
