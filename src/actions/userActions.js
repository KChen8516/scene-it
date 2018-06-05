// Login user
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import DOMAIN from '../config';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

console.log('User Actions DOMAIN', DOMAIN);

export function loginUser(user) {
  // console.log('Calling loginUser...');
  const request = axios({
      method: 'post',
      data: user,
      url: `${DOMAIN}/users/login`,
      headers: ['Content-Type': 'application/x-www-form-urlencoded']
  });

  return dispatch => {
    dispatch({type: USER_LOGIN});

    request.then(
      user => {
        dispatch({type: USER_LOGIN_SUCCESS, payload: user.data})
      }
    ).catch(
      error => {dispatch({type: USER_LOGIN_ERROR, error})}
    );
  }
}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export const logoutUser = () => {
  console.log('Removing user and token.');
  // Remove token from localStorage
  localStorage.removeItem('googleToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which should set isAuthenticated to false
  return {
    type: LOGOUT_USER
  }
}