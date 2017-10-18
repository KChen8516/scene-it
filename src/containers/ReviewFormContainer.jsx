import React, { Component } from 'react';

import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';
// import { MDCIconToggle } from '@material/icon-toggle/dist/mdc.icon-toggle';

import ReviewForm from '../components/ReviewForm';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    //Initialize MDC form elements
    new MDCTextfield(document.querySelector('.mdc-textfield'));
    // MDCIconToggle.attachTo(document.querySelector('.mdc-icon-toggle'));
  }

  render() {
      return <ReviewForm />
  }
}

export default ReviewFormContainer;
