import './App.css'
import Home from "./components/Home"
import Profile from "./components/Profile"
import Category from "./components/Category"
import { Routes, Route, Link } from 'react-router-dom'
import Settings from './components/Settings'
import PrivateRoute from './components/PrivateRoute'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setLoggedIn(true)}>Login</button>
      <nav>
        <Link to={""}>
          Home
        </Link>
        <Link to={"/profile"}>
          Profile
        </Link>
        <Link to={"/cat"}>
          Category
        </Link>
        <Link to={"/settings"}>
          Settings
        </Link>
        <Link to={"cat/vetements"}>
          test
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='cat' element={<Category />} />
        <Route path='/settings' element={
          <PrivateRoute loggedIn={loggedIn}>
            <Settings />
          </PrivateRoute>
        } />
      </Routes>

    </div>
  )
}

export default App
