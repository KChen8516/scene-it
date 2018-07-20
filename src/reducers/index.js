import { combineReducers } from 'redux';

import MovieReducer, * as fromMovie from './movieReducer';
import ReviewReducer, * as fromReview from './reviewReducer';
import UserReducer, * as fromUser from './userReducer';

export default combineReducers({
  movies: MovieReducer,
  reviews: ReviewReducer,
  user: UserReducer
});

// Narrow the scope each selector deals with to the relevant reducer
export const getUserReviews = state => fromReview.getUserReviews(state.reviews);
export const getReview = state => fromReview.getReview(state.reviews);
export const getReviewErrors = state => fromReview.getReviewErrors(state.reviews);

export const getUserProfile = state => fromUser.getUserProfile(state.user);
export const getIsAuthenticated = state => fromUser.getIsAuthenticated(state.user);

export const getSearchMovieResults = state => fromMovie.getSearchMovieResults(state.movies);
export const getSearchMovieErrors = state => fromMovie.getSearchMovieErrors(state.movies);
