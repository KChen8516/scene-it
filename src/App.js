import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Module Imports
import { ReviewForm, Review, ReviewList } from './review';
import { Navbar } from './navbar';
import { SideDrawer } from './sidedrawer';

// Containers
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';

// CSS and assets
import './App.css';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

class App extends Component {

  /**
   * React only provides 'this' context to lifecycle methods
   * such as the constructor.
   */
  constructor(props) {
    super(props);

    // console.log('App props', this.props);

    // if (this.props.history.location.pathname === '/review') {
    //   console.log('Review Page');
    // }

    this.props.history.listen((location, action) => {
      console.log('route change');
      console.log(location, action);
      this.drawer.open = false;
    })

  }

  componentDidMount() {
    //console.log('App.js component mounted.');
    this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
  }

  componentWillUnmount() {
    // console.log('App component unmounting...');
  }

  render() {
    const getClassNames = () => {
      if (this.props.location.pathname !== '/') {
        return "App-Content mdc-toolbar-fixed-adjust";
      } else {
        return "App-Content";
      }
    }

    // if(currentRoute !== '/') {
    //   isHomePage = false;
    //   // Check for /review/:id routes
    //   let checkRoute = /\/review\//.test(currentRoute);
    //   console.log(checkRoute);

    return (
      <div className="App">
 
        <Navbar routes={this.props}/>
        <SideDrawer />

        <ErrorBoundary>
          <div className={getClassNames()}>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path="/login" component={LoginContainer}/>
              <Route path="/review/:id" component={Review} />
              <Route exact path="/reviewlist" component={ReviewList}/>
              <Route exact path="/reviewform" component={ReviewForm}/>
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
