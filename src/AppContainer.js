import App from './App';

import { connect } from 'react-redux';
import { loginUser } from './actions/userActions';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state, ownProps) {
  return {};
}

export default withRouter(connect(
  mapStateToProps, 
  { login: loginUser }
)(App));
