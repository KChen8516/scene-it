import {
  FETCH_ALL_REVIEWS,
  FETCH_ALL_REVIEWS_SUCCESS,
  FETCH_ALL_REVIEWS_ERROR,
  FETCH_REVIEW,
  FETCH_REVIEW_SUCCESS,
  FETCH_REVIEW_ERROR,
  GET_USER_REVIEWS,
  GET_USER_REVIEWS_SUCCESS,
  GET_USER_REVIEWS_ERROR
} from '../actions/reviewActions';

const INITIAL_STATE = {
  reviewList: {
    reviews: [],
    loading: false,
    error: null
  },
  fetchedReview: {
    id: null,
    movieTitle: null,
    pros: [],
    cons: [],
    other: [],
    loading: false,
    error: null
  },
  reviews: [],
  loading: false,
  errors: []
};

/**
 * Reducers receive payloads of information (actions) to update the state tree.
 */
export default function(prevState = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_ALL_REVIEWS: {
      return {
        ...prevState,
        reviewList: {
          ...prevState.reviewList,
          loading: true
        }
      }
    }

    case FETCH_ALL_REVIEWS_ERROR: {
      return {
        ...prevState,
        reviewList: {
          ...prevState.reviewList,          
          loading: false,
          error: action.payload
        }
      }
    }

    case FETCH_ALL_REVIEWS_SUCCESS: {
      return {
        ...prevState,
        reviewList: {
          ...prevState.reviewList,          
          reviews: action.payload,
          loading: false,
          error: null
        }
      }
    }

    case FETCH_REVIEW: {
      return {
        ...prevState,
        fetchedReview: {
          ...prevState.fetchedReview,
          id: action.id,
        }
      }
    }

    case FETCH_REVIEW_SUCCESS: {
      return {
        ...prevState,
        fetchedReview: {
          ...prevState.fetchedReview,
          loading: false,
          id: action.payload._id,
          movieTitle: action.payload.movieTitle,
          pros: action.payload.pros,
          cons: action.payload.cons,
          other: action.payload.other
        }
      }
    }

    case FETCH_REVIEW_ERROR: {
      return {
        ...prevState,
        fetchedReview: {
          loading: false,
          error: action.payload
        }
      }
    }

    case GET_USER_REVIEWS: {
      return {
        ...prevState,
        loading: true
      }
    }

    case GET_USER_REVIEWS_SUCCESS: {
      return {
        ...prevState,
        reviews: action.payload,
        loading: false
      }
    }

    case GET_USER_REVIEWS_ERROR: {
      return {
        ...prevState,
        loading: false,
        errors: action.payload
      }
    }

    default:
      return prevState;
  }
}

// State selectors
export const getUserReviews = (state) => state.reviews;
