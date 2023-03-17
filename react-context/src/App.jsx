import './App.css'
import User from './components/User'
import Products from './components/Products'
import Categories from './components/Categories'
import MyContext from './context'

function App() {

  let name = 'Omar'
  let age = 50

  return (
    <div className="App">
      <MyContext.Provider value={{ name, age }}>
        <User />
        <Products />
        <Categories />
      </MyContext.Provider>
    </div>
  )
}

export default App
