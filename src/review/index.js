// Create a feature module entry point for Reviews
// import ReviewContainer from './reviewItem/ReviewContainer';
export { default as ReviewList } from './reviewList/ReviewListContainer';
export { default as ReviewForm } from './reviewForm/ReviewFormContainer';
export { default as Review }  from './reviewItem/ReviewContainer';
export { default as ReviewEdit } from './reviewEdit/ReviewEditContainer';

/**
 * Is there a way to import the presentational Review component
 * as well? For now the container acts as the entire feature
 * entry point.
 */
