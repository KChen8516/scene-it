import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';
import { fetchReview } from '../../actions/reviewActions';

class ReviewContainer extends Component {

  componentWillMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return <Review review={this.props.reviewText} />;
  }
}

const mapStateToProps = state => {
  return {
    reviewText: state.reviews.fetchedReview.reviewText
  }
}

// You can use concise obj notation for arrow functions
// in an object. (ES2015)
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReview(id) {
    dispatch(fetchReview(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);
