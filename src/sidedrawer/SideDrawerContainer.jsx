import React, { Component } from 'react';
import { connect} from 'react-redux';
import { loginUser } from '../actions/userActions';
import SideDrawer from './SideDrawer';

class SideDrawerContainer extends Component {
    render() {
        // console.log('Sidedrawer props', this.props);
        return <SideDrawer {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.profile,
        isLoggedIn: state.user.isAuthenticated        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(loginUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerContainer);
