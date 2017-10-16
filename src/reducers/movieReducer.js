import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIE_FROM_STORE
} from '../actions/movieActions';

const initialState = {
  movies: [],
  fetching: false,
  fetched: false,
  error: null
}

export function search(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES: {
      return {...state, fetching: true}
    }
    case FETCH_MOVIES_ERROR: {
      console.log('An error occured');
      return {...state, fetching: false, error: action.payload}
    }
    case FETCH_MOVIES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload
      }
    }
    case FETCH_MOVIE_FROM_STORE: {
      console.log(action.payload);
      console.log(state);
      return state;
    }
    default:
      return state;
  }
}
