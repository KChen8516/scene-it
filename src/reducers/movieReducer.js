import {
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
  SEARCH_MOVIES_SUCCESS
} from '../actions/movieActions';

const initialState = {
  movies: [],
  isFetching: false,
  errors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES: {
      return { ...state, isFetching: true };
    }
    case SEARCH_MOVIES_ERROR: {
      return { ...state, isFetching: false, errors: action.payload };
    }
    case SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        movies: action.payload
      };
    }
    default:
      return state;
  }
}

export const getSearchMovieResults = state => state.movies;
export const getSearchMovieErrors = state => state.errors;
