import React, { Component } from 'react';

import ReviewList from './ReviewList';

import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/reviewActions';

class ReviewListContainer extends Component {

  componentWillMount() {
    console.log('Fetching Reviews...');
    this.props.getReviews();
  }

  render() {
    return (
      <ReviewList reviews={this.props.reviews} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews.reviewList.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviews: () => dispatch(fetchReviews())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);
