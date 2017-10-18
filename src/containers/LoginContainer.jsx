/**
 * Not sure if a more encapsulated relationship is easier to reason about.
 * App > container(redux) > component > template. No class/Component declaration.
 */
import React, { Component } from 'react';

import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';

import Login from '../components/Login';

import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class LoginContainer extends Component {
  componentDidMount() {
    new MDCTextfield(document.querySelector('.Email'));
    new MDCTextfield(document.querySelector('.Password'));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  render() {
    return (
      <Login />
    );
  }

  login(e) {
    e.preventDefault();
    let user = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    // console.log(user);
    this.props.onLogin(user);
    console.log(this.props);
    // Prevent any form submission
    return false;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLogin: user => dispatch(fetchUser(user))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
