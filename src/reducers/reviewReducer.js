import {
  FETCH_ALL_REVIEWS,
  FETCH_ALL_REVIEWS_SUCCESS,
  FETCH_ALL_REVIEWS_ERROR,
  FETCH_REVIEW,
  FETCH_REVIEW_SUCCESS,
  FETCH_REVIEW_ERROR
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
  },
  fetchedReview: {
    id: null,
    movieTitle: null,
    reviewText: null,
    loading: false,
    error: null
  },
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
          movieTitle: action.payload.movieTitle,
          reviewText: action.payload.longReview
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

    case 'CREATE_REVIEW': {
      return {
        ...prevState,
        newReview: {
          loading: true
        }
      }
    }

    case 'CREATE_REVIEW_SUCCESS': {
      return {
        ...prevState,
        newReview: {
          text: action.payload,
          loading: false,
          error: null
        }
      }
    }

    case 'CREATE_REVIEW_ERROR': {
      return {
        ...prevState,
        newReview: {
          loading: false,
          error: action.paylod
        }
      }
    }

    default:
      return prevState;
  }
}
