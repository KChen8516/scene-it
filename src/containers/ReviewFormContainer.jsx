import React, { Component } from 'react';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield';

import ReviewForm from '../components/ReviewForm';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    //Initialize MDC form elements
    new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  render() {
      return <ReviewForm />
  }
}

export default ReviewFormContainer;
