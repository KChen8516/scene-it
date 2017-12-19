// Create a feature module entry point for Reviews
// import ReviewContainer from './reviewItem/ReviewContainer';

export { default as ReviewForm } from './reviewForm/ReviewFormContainer';
export { default as Review }  from './reviewItem/ReviewContainer';

/**
 * Is there a way to import the presentational Review component
 * as well? For now the container acts as the entire feature
 * entry point.
 */
