// Fetch movies
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const FETCH_USER = 'FETCH_USER';

export function fetchUser(user) {
  return {
    type: 'FETCH_USER_FULFILLED',
    payload: user
  }
}
