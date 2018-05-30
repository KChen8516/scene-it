import React, { Component } from 'react';
import ReviewFormik from './ReviewForm';

import { connect } from 'react-redux';


class ReviewFormContainer extends Component {

  componentWillReceiveProps(nextProps) {
      // console.log('ReactFormContainer componentWillReciveProps', nextProps );
  }

  render() {
      return <ReviewFormik user={this.props.user}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormContainer);
