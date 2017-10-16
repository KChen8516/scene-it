import axios from 'axios';

// Fetch movies
export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export const FETCH_MOVIE_FROM_STORE = 'FETCH_MOVIE_FROM_STORE';

export function fetchMovies() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:8080/api/movies',
    headers: []
  });

  return dispatch => {
    return (
      request
        .then(response => dispatch(fetchMoviesSuccess(response.data)))
        .catch(error => dispatch(fetchMoviesError(error)))
    );
  };
}

export function fetchMoviesSuccess(movies) {
  console.log(movies);
  return {
    type: FETCH_MOVIES_FULFILLED,
    payload: movies
  };
}

export function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: error
  }
}

export function fetchMovie(id) {
  return {
    type: FETCH_MOVIE_FROM_STORE,
    payload: id
  }
}
