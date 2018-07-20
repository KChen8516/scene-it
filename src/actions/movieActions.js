import axios from 'axios';
import { TMDB_API_SEARCH, TMDB_API_KEY } from '../config';

export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const SEARCH_MOVIES = 'FETCH_MOVIES';

export const FETCH_MOVIE_FROM_STORE = 'FETCH_MOVIE_FROM_STORE';

export function searchMovies(query) {
  let encoded = encodeURIComponent(query);
  const request = axios({
    method: 'get',
    url: `${TMDB_API_SEARCH}?${TMDB_API_KEY}&language=en-US&query=${encoded}&page=1&include_adult=false`
  });

  return dispatch => {
    dispatch({ type: SEARCH_MOVIES });

    request.then(
      response =>
        dispatch({
          type: SEARCH_MOVIES_SUCCESS,
          payload: response.data.results  // first 20 results/page
        }),
      error =>
        dispatch({
          type: SEARCH_MOVIES_ERROR,
          payload: error
        })
    );
  };
}

export function fetchMovie(id) {
  return {
    type: FETCH_MOVIE_FROM_STORE,
    payload: id
  };
}
