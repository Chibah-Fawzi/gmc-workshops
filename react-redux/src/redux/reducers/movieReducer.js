const initialState = {
  movieList: [
    {
      title: "The Godfather",
      rating: 9.2,
      genre: "Crime",
    },
    {
      title: "The Shawshank Redemption",
      rating: 9.3,
      genre: "Drama",
    },
    {
      title: "The Dark Knight",
      rating: 9.0,
      genre: "Action",
    },
    {
      title: "Pulp Fiction",
      rating: 8.9,
      genre: "Crime",
    },
  ],
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return { movieList: [...state.movieList, action.payload.movie] };

    default:
      return initialState;
  }
}
