import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getIsAuthenticated } from '../reducers';
import Navbar from './Navbar';

class NavbarContainer extends Component {
  render() {
    return (
      <Navbar
        isLoggedIn={this.props.isLoggedIn}
        location={this.props.location}
        history={this.props.history}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: getIsAuthenticated(state)
});

export default withRouter(connect(mapStateToProps)(NavbarContainer));
