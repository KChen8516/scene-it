import { connect} from 'react-redux';
import { loginUser } from '../actions/userActions';
import SideDrawer from './SideDrawer';

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

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
