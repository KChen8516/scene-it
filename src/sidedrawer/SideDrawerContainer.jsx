import React, { Component } from 'react';
import { connect} from 'react-redux';
import { loginUser } from '../actions/userActions';
import { getUserProfile, getIsAuthenticated } from '../reducers';
import SideDrawer from './SideDrawer';

class SideDrawerContainer extends Component {
    render() {
        // console.log('Sidedrawer props', this.props);
        return <SideDrawer {...this.props}/>
    }
}

const mapStateToProps = state => ({
    user: getUserProfile(state),
    isLoggedIn: getIsAuthenticated(state)
});

// Since prop func args usually match the action args, you can pass a config obj
// instead of declaring mapDispatchToProps
export default connect(
    mapStateToProps, 
    { login: loginUser }
)(SideDrawerContainer);
