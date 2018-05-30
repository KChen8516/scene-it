import React, { Component } from 'react';

import ReviewList from './ReviewList';

import { connect } from 'react-redux';
import { fetchReviewsByUser } from '../../actions/reviewActions';
import { getUserReviews, getUserProfile } from '../../reducers';

class ReviewListContainer extends Component {

  componentWillMount() {
    this.props.getReviewsById(this.props.user._id);
  }

  render() {
    return (
      <ReviewList {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: getUserProfile(state),
  reviews: getUserReviews(state)
});

export default connect(
  mapStateToProps, 
  { getReviewsById: fetchReviewsByUser }
)(ReviewListContainer);
