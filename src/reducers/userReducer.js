import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  SET_CURRENT_USER,
  LOGOUT_USER
} from '../actions/userActions';

const initialState = {
  profile: {},
  isAuthenticated: false,
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case USER_LOGIN: {
      return {...state, loading: true}
    }
    case USER_LOGIN_ERROR: {
      return {...state, loading: false, error: action.payload}
    }
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        profile: action.payload
      }
    }
    case SET_CURRENT_USER: {
      return { 
        ...state,
        isAuthenticated: true,
        profile: action.payload
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isAuthenticated: false,
        profile: {}
      }
    }
    default:
      return state;
  }
}

export const getUserProfile = state => state.profile;
export const getIsAuthenticated = state => state.isAuthenticated;
