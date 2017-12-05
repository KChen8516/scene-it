import {
  FETCH_REVIEWS,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_ERROR
} from '../actions/reviewActions';

const INITIAL_STATE = {
  reviewList: {
    reviews: [],
    loading: false,
    error: null
  },
  newReview: {
    text: null,
    loading: false,
    error: null
  }
}

/**
 * Reducers receive paylods of information (actions) to update the state tree.
 */
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_REVIEWS: {
      return {
        ...state,
        reviewList: {
          loading: true
        }
      }
    }
    case FETCH_REVIEWS_ERROR: {
      return {
        ...state,
        reviewList: {
          loading: false,
          error: action.payload
        }
      }
    }
    case FETCH_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviewList: {
          reviews: action.payload,
          loading: false,
          error: null
        }
      }
    }
    case 'CREATE_REVIEW': {
      return {
        ...state,
        newReview: {
          loading: true
        }
      }
    }
    case 'CREATE_REVIEW_SUCCESS': {
      console.log(action.payload);
      return {
        ...state,
        newReview: {
          text: action.payload,
          loading: false,
          error: null
        }
      }
    }
    case 'CREATE_REVIEW_ERROR': {
      return {
        ...state,
        newReview: {
          loading: false,
          error: action.paylod
        }
      }
    }
    default:
      return state;
  }
}
