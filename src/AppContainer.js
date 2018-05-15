import App from './App';

import { connect } from 'react-redux';
import { setCurrentUser } from './actions/userActions';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
