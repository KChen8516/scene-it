import {
  FETCH_USER,
  FETCH_USER_FULFILLED,
  FETCH_USER_ERROR
} from '../actions/userActions';

const initialState = {
  user: {},
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER: {
      return {...state, loading: true}
    }
    case FETCH_USER_ERROR: {
      return {...state, loading: false, error: action.payload}
    }
    case FETCH_USER_FULFILLED: {
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    }
    default:
      return state;
  }
}
