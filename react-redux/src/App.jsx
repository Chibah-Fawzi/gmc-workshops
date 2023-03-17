import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import './App.css'
import { addMovie } from './redux/actions/movieActions';

function App() {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieList);


  function ajouterFilm(event) {
    event.preventDefault();
    const title = event.target.titre.value
    const rating = event.target.rating.value
    const genre = event.target.genre.value

    dispatch(addMovie({
      movie: {
        title,
        rating,
        genre
      }
    }))
  }
  return (
    <div className="App">
      <form onSubmit={ajouterFilm}>
        <div className='inputWrapper'>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' name='titre' placeholder='Ajouter un titre' />
        </div>
        <div className='inputWrapper'>
          <label htmlFor="rating">Rating</label>
          <input type="number" id='rating' name='rating' placeholder='Ajouter une note' />
        </div>
        <div className='inputWrapper'>
          <label htmlFor="genre">Genre</label>
          <select id='genre' name='genre' >
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Horreur">Horreur</option>
            <option value="Comédie">Comédie</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>
        <button type='submit'>Ajouter un film</button>
      </form>

      <div style={{ display: 'flex' }}>
        {movies.map((movie, index) => {
          return <div key={index}>
            <h1>{movie.title}</h1>
            <h2>{movie.rating}</h2>
            <h3>{movie.genre}</h3>
          </div>
        })}
      </div>
    </div>
  )
}

export default connect()(App)
