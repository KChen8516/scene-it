// Login user
import axios from 'axios';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export function loginUser(user) {
  
  const request = axios({
      method: 'post',
      data: user,
      url: 'http://localhost:5000/users/login',
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
