import axios from 'axios';
// query string lib for encoding POST requests
import qs from 'qs';

// Create a new movie review
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const CREATE_REVIEW_SUCCESS = 'CREATE_REVIEW_SUCCESS';
export const CREATE_REVIEW_ERROR = 'CREATE_REVIEW_ERROR';
// Fetch existing reviews
export const FETCH_REVIEWS = 'FETCH_REVIEWS';
export const FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const FETCH_REVIEWS_ERROR = 'FETCH_REVIEWS_ERROR';

// Leverage 'thunk' middleware for asynchronous dispatches
export function createReview(review) {
  const request = axios({
    method: 'post',
    data: qs.stringify(review),
    url: 'http://localhost:8080/api/reviews',
    headers: [
      'Content-Type': 'application/x-www-form-urlencoded'
    ]
  });

  return (dispatch, getState) => {
    console.log(getState);

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

export function createReviewSuccess(text) {
  return {
    type: 'CREATE_REVIEW_SUCCESS',
    payload: text
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

export function fetchReviewsSuccess(reviews) {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews
  };
}

export function fetchReviewsError(err) {
  return {
    type: FETCH_REVIEWS_ERROR,
    payload: err
  };
}
