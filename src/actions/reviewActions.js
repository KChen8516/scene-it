import axios from 'axios';
import DOMAIN from '../config';
// query string lib for encoding POST requests
// import qs from 'qs';

// Fetch existing reviews
export const FETCH_ALL_REVIEWS = 'FETCH_ALL_REVIEWS';
export const FETCH_ALL_REVIEWS_SUCCESS = 'FETCH_ALL_REVIEWS_SUCCESS';
export const FETCH_ALL_REVIEWS_ERROR = 'FETCH_ALL_REVIEWS_ERROR';
// Fetch a single review
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const FETCH_REVIEW_SUCCESS = 'FETCH_REVIEW_SUCCESS';
export const FETCH_REVIEW_ERROR = 'FETCH_REVIEW_ERROR';
// Get reviews for a User
export const GET_USER_REVIEWS = 'GET_USER_REVIEWS';
export const GET_USER_REVIEWS_SUCCESS = 'GET_USER_REVIEWS_SUCCESS';
export const GET_USER_REVIEWS_ERROR = 'GET_USER_REVIEWS_ERROR';

// Leverage 'thunk' middleware for asynchronous dispatches
export function createReviewAPI(review) {
  console.log('Review API payload', review);
  return axios({
    method: 'post',
    // data: qs.stringify(review),
    data: review,
    url: `${DOMAIN}/reviews`,
  });
}

export function updateReview(review) {
  console.log('Update Review payload', review);
  return axios({
    method: 'put',
    data: review,
    url:`${DOMAIN}/reviews/edit/${review.id}`,
  });
}

export function fetchReview(id) {
  const req = axios({
    method: 'get',
    url:`${DOMAIN}/reviews/${id}`
  });

  return dispatch => {

    dispatch({type: FETCH_REVIEW, id});

    req.then(
      response => dispatch({
        type: FETCH_REVIEW_SUCCESS,
        payload: response.data
      })
    ).catch(
      err => dispatch({type: FETCH_REVIEW_ERROR, err})
    );
  };
}

export const fetchReviewsByUser = id => dispatch => {
  dispatch({type: GET_USER_REVIEWS});
  axios
    .get(`${DOMAIN}/reviews/user/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER_REVIEWS_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => 
      dispatch({
        type: GET_USER_REVIEWS_ERROR,
        payload: err.response.data
      })
    );
};

export function fetchReviews() {
  const request = axios({
    method: 'get',
    url: `${DOMAIN}/reviews`,
    headers: []
  });

  return dispatch => {
    return (
      request
        .then(response => dispatch(fetchReviewsSuccess(response.data)))
        .catch(err => dispatch(fetchReviewsError(err)))
    );
  };
}

// If the body of the function only returns one obj, you can
// rewrite the arrow function to return object notation instead (ES2015)
export const fetchReviewsSuccess = reviews => ({
    type: FETCH_ALL_REVIEWS_SUCCESS,
    payload: reviews
});

export function fetchReviewsError(err) {
  return {
    type: FETCH_ALL_REVIEWS_ERROR,
    payload: err
  };
}
