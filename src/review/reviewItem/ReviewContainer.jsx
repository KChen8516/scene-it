import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';
import { fetchReview } from '../../actions/reviewActions';

class ReviewContainer extends Component {

  componentWillMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  componentDidMount() {
    // react-router v4 currently preserves scroll position between routes
    window.scrollTo(0, 0);
  }

  render() {
    return <Review {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    id: state.reviews.fetchedReview.id,
    movieTitle: state.reviews.fetchedReview.movieTitle,
    pros: state.reviews.fetchedReview.pros,
    cons: state.reviews.fetchedReview.cons,
    other: state.reviews.fetchedReview.other,
    error: state.reviews.fetchedReview.error,
  }
}

// You can use concise obj notation for arrow functions in an object. (ES2015)
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReview(id) {
    dispatch(fetchReview(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
