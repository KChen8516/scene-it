import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Module Imports
import { ReviewForm, Review, ReviewList } from './review';

import Navbar from './navbar/Navbar';
import SideDrawer from './sidedrawer/SideDrawer';

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

    if (this.props.history.location.pathname === '/review') {
      console.log('Review Page');
    }

    this.props.history.listen((location, action) => {
      console.log('route change');
      console.log(location, action);
      this.drawer.open = false;
    })

    this.navBack = this.navBack.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    //console.log('App.js component mounted.');
    this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
  }

  componentWillUnmount() {
    // console.log('App component unmounting...');
  }

  navBack() {
    this.props.history.goBack();
  }

  handleNavigation() {
    const navDrawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    if (this.props.location.pathname === '/reviewform') {
      this.props.history.goBack();
    } else {
      navDrawer.open = true;
    }
  }

  render() {
    // console.log('App.js component rendering');
    // console.log(this.props.location);
    // const currentRoute = this.props.location.pathname;
    // let isHomePage = true;
    // let NavbarTitle = null;

    // const SubNavIcon = {
    //   color: '#9b9b9b'
    // };

    // const SubNavBar = {
    //   background: 'rgba(203, 201, 201, 0.15)'
    // };

    // if(currentRoute !== '/') {
    //   isHomePage = false;
    //   // Check for /review/:id routes
    //   let checkRoute = /\/review\//.test(currentRoute);
    //   console.log(checkRoute);

    //   if(checkRoute) {
    //     // currentRoute = '/review'
    //   }

    //   switch(currentRoute) {
    //     case '/review':
    //       NavbarTitle = <span className="mdc-typography--headline SubNavTitle">Review</span>;
    //       break;
    //     case '/reviewform':
    //       NavbarTitle = <span className="mdc-typography--headline SubNavTitle">New Review</span>;
    //       break;
    //     case '/reviewlist':
    //       NavbarTitle = <span className="mdc-typography--headline SubNavTitle">My Reviews</span>;
    //       break;
    //     default:
    //       NavbarTitle = <span className="mdc-typography--headline SubNavTitle">404</span>;
    //       break;
    //   }
    // } else {
    //   NavbarTitle = <span className="mdc-typography--headline MainNavTitle">Scene It</span>;
    // }

    return (
      <div className="App">
        {/* {currentRoute !== '/login' ? (
          <header className="mdc-toolbar Navbar"
                  style={!isHomePage ? SubNavBar : null} >
            <div className="mdc-toolbar__row">
              <section onClick={this.handleNavigation} className="LeftNav mdc-toolbar__section mdc-toolbar__section--align-start">
                {currentRoute === '/reviewform' ? (
                  <div className="BackButtonSection">
                    <a className="material-icons mdc-toolbar__icon--menu BackIcon">keyboard_arrow_left</a>
                    <span className="BackButton">Back</span>
                  </div>
                ) : (
                  <a className="MenuIcon material-icons mdc-toolbar__icon--menu"
                     style={!isHomePage ? SubNavIcon : null}>menu</a>
                )}
              </section>
              <section className="mdc-toolbar__section">
                {NavbarTitle}
              </section>
              <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                {currentRoute !== '/reviewform' ? (
                  <a className="SearchIcon material-icons mdc-toolbar__icon--menu"
                     style={!isHomePage ? SubNavIcon : null}>search</a>
                 ) : (
                  null
                 )}
              </section>
            </div>
          </header>) : (null)
        } */}

        <Navbar />
        <SideDrawer />

        <ErrorBoundary>
          <div className="App-Content">
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
