import { combineReducers } from 'redux';

import { search } from './movieReducer';
import ReviewReducer, * as fromReview from './reviewReducer';
import UserReducer, * as fromUser from './userReducer';

export default combineReducers({
  search,
  reviews: ReviewReducer,
  user: UserReducer
});

// Narrow the scope each selector deals with to the relevant reducer
export const getUserReviews = state => fromReview.getUserReviews(state.reviews);

export const getUserProfile = state => fromUser.getUserProfile(state.user);
export const getIsAuthenticated = state => fromUser.getIsAuthenticated(state.user);
