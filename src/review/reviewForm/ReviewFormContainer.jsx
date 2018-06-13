import React, { Component } from 'react';
import ReviewFormik from './ReviewForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class ReviewFormContainer extends Component {
  render() {
      return <ReviewFormik {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
      user: state.user.profile,
  }
}

// Set props for each dispatch action ref needed
const mapDispatchToProps = dispatch => {
  return {
    // createReview: review => dispatch(createReview(review))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewFormContainer));
