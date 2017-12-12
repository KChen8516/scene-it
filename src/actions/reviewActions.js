import axios from 'axios';
// query string lib for encoding POST requests
import qs from 'qs';

// Create a new movie review
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_ERROR = 'CREATE_REVIEW_ERROR';
// Fetch existing reviews
export const FETCH_ALL_REVIEWS = 'FETCH_ALL_REVIEWS';
export const FETCH_ALL_REVIEWS_SUCCESS = 'FETCH_ALL_REVIEWS_SUCCESS';
export const FETCH_ALL_REVIEWS_ERROR = 'FETCH_ALL_REVIEWS_ERROR';
// Fetch a sigle review
export const FETCH_REVIEW = 'FETCH_REVIEW';
export const FETCH_REVIEW_SUCCESS = 'FETCH_REVIEW_SUCCESS';
export const FETCH_REVIEW_ERROR = 'FETCH_REVIEW_ERROR';


// Leverage 'thunk' middleware for asynchronous dispatches
export function createReview(review) {
  console.log(review);
  const request = axios({
    method: 'post',
    data: qs.stringify(review),
    url: 'http://localhost:8080/api/reviews',
    headers: [
      'Content-Type': 'application/x-www-form-urlencoded'
    ]
  });

  return (dispatch, getState) => {

    dispatch({
      type: CREATE_REVIEW,
      review
    });

    request.then(
      response => dispatch({
        type: CREATE_REVIEW_SUCCESS,
        payload: response.data
      })
    ).catch(
      error => dispatch({
        type: CREATE_REVIEW_ERROR,
        error
      })
    )
  }
}

// export function createReviewSuccess(text) {
//   return {
//     type: 'CREATE_REVIEW_SUCCESS',
//     payload: text
//   };
// }

export function fetchReview(id) {
  console.log(id);
  const req = axios({
    method: 'get',
    url:`http://localhost:8080/api/reviews/${id}`
  });

  console.log(req);

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

export function fetchReviews() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:8080/api/reviews',
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
