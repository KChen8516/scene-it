import { combineReducers } from 'redux';

import { search } from './movieReducer';
import ReviewReducer from './reviewReducer';
import UserReducer from './userReducer';

export default combineReducers({
  search,
  reviews: ReviewReducer,
  user: UserReducer
})
