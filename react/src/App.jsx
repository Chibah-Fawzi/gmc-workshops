import { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import Products from './Products'


function App() {
  const [name, setName] = useState("Omar")
  const [dark, setDark] = useState(false);

  function changeName(event) {
    event.preventDefault();
    setDark(!dark)
  }

  // Exécuter une function au moment ou le composant s'affiche
  useEffect(() => {
    console.log("hello");
  }, [])

  // Exécuter une function au moment ou le composant s'update
  useEffect(() => {
    console.log(dark);
    console.log("test");
  }, [dark])
  // Exécuter une function au moment ou le composant est supprimé
  useEffect(() => {
    () => {
      console.log("test");
    }
  }, [dark])

  var age = 50
  return (
    <div>

      <form onSubmit={changeName}>
        <input type="text" name='monNom' />
        <button type='submit'>Click me</button>
      </form>

      <Home username={name} monage={age} />
      <Products username={name} monage={age} />
    </div>
  )
}

export default App
