import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';

import Login from './Login';

class LoginContainer extends Component {

    render() {
        return <Login login={this.props.login}/>
    }

}

const mapStateToProps = state => {
    return {
        user: state.user.profile,
        isLoggedIn: state.user.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(loginUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);