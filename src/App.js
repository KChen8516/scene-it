import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import setAuthToken from './utils/setAuthToken';

// Module Imports
import { ReviewForm, Review, ReviewList, ReviewEdit } from './review';
import { Navbar } from './navbar';
import { SideDrawer } from './sidedrawer';
import { Home } from './home';

// Containers
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import PrivateRoute from './components/PrivateRoute';

// CSS and assets
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import './App.css';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

class App extends Component {

  /**
   * React only provides 'this' context to lifecycle methods such as the constructor.
   */
  constructor(props) {
    super(props);

    // console.log('App props', this.props);

    // Check for token
    if(localStorage.googleToken) {
      console.log('Local token found');
      // Set auth token header
      setAuthToken(localStorage.googleToken);
      // Grab the user from firebase
      firebase.auth().onAuthStateChanged(res => {
        // console.log(res);
        if(res) {
          const { displayName, email, photoURL, uid } = res.providerData[0];
          const user = {
            displayName: displayName,
            email: email,
            image: photoURL,
            googleID: uid 
          }
          this.props.login(user);
          // this.props.setCurrentUser(user);
        }
      });
    }
  }

  componentDidMount() {
    //console.log('App.js component mounted.');
    this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

    this.props.history.listen((location, action) => {
      // console.log('route change');
      // console.log(location, action);
      this.drawer.open = false;
    });
  }

  componentWillUnmount() {
    // console.log('App component unmounting...');
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  render() {
    const getClassNames = () => {
      if (this.props.location.pathname !== '/') {
        return "App-Content mdc-toolbar-fixed-adjust";
      } else {
        return "App-Content";
      }
    }

    return (
      <div className="App">
 
        <Navbar routes={this.props}/>
        <SideDrawer history={this.props.history}/>

        <ErrorBoundary>
          <div className={getClassNames()}>
            <Switch>
              <PrivateRoute path="/review/edit/:id" component={ReviewEdit} />
              <PrivateRoute exact path="/reviewlist" component={ReviewList}/>
              <PrivateRoute exact path="/reviewform" component={ReviewForm}/>
              <Route exact path="/" component={Home}/>
              <Route path="/review/:id" component={Review} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </ErrorBoundary>

        <div className="App-Footer">
        </div>

      </div>
    );
  }
}

export default App;
