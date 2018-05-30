import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/userActions';

import Login from './Login';

class LoginContainer extends Component {

    render() {
        return <Login {...this.props}/>
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.user.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(loginUser(user)),
        logout: () => dispatch(logoutUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);