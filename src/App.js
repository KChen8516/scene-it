import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

// Containers
import HomeContainer from './containers/HomeContainer';
import ReviewFormContainer from './containers/ReviewFormContainer';
import LoginContainer from './containers/LoginContainer';
import Register from './components/Register';
import Review from './components/Review';
import PageNotFound from './components/PageNotFound';
import ReviewListContainer from './containers/ReviewListContainer';

// CSS and assets
import './App.css';
import ProfileImage from './assets/ariana-grande.jpg';

class App extends Component {

  /**
   * React only provides 'this' context to lifecycle methods
   * such as the constructor.
   */
  constructor(props) {
    super(props);

    console.log('App props', this.props);

    if (this.props.history.location.pathname === '/review') {
      console.log('Review Page');
    }

    this.props.history.listen((location, action) => {
      console.log('route change');
      console.log(location, action);
    })

    this.navBack = this.navBack.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    // this.navDrawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
    // document.querySelector('.mdc-toolbar__icon--menu').addEventListener(
    //   'click', () => this.navDrawer.open = true
    // );
    console.log('App.js component mounted.');
  }

  componentWillUnmount() {
    console.log('App component unmounting...');
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
    console.log('App.js component rendering');

    const currentRoute = this.props.location.pathname;
    let isHomePage = true;
    let NavbarTitle = null;

    const SubNavIcon = {
      color: '#9b9b9b'
    };

    const SubNavBar = {
      background: 'rgba(203, 201, 201, 0.15)'
    };

    if(currentRoute !== '/') {
      isHomePage = false;
      switch(currentRoute) {
        case '/review':
          NavbarTitle = <span className="mdc-typography--headline SubNavTitle">Review</span>;
          break;
        case '/reviewform':
          NavbarTitle = <span className="mdc-typography--headline SubNavTitle">New Review</span>;
          break;
        case '/reviewlist':
          NavbarTitle = <span className="mdc-typography--headline SubNavTitle">My Reviews</span>;
          break;
        default:
          NavbarTitle = <span className="mdc-typography--headline SubNavTitle">404</span>;
          break;
      }
    } else {
      NavbarTitle = <span className="mdc-typography--headline MainNavTitle">Scene It</span>;
    }

    return (
      <div className="App">
        {currentRoute !== '/login' ? (
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
        }
        {/* Navigation Drawer */}
        <aside className="mdc-temporary-drawer mdc-typography">
          <nav className="SideDrawer mdc-temporary-drawer__drawer">

            <header className="mdc-temporary-drawer__header">
              <div className="SideDrawerHeader mdc-temporary-drawer__header-content">
                <Link to="/">
                  <img src={ProfileImage} className="SideDrawerImage" alt="Side Drawer"/>
                </Link>
                <h1 className="mdc-typography--title">Ariana Grande</h1>
                <p className="mdc-typography--caption">Member since 2017 | 5 Reviews</p>
              </div>
            </header>

            <div className="SideDrawerMainNavigation">
              <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
                <Link to="/reviewform" className="SideDrawerNavLink mdc-list-item">
                  <p>Write a Review</p>
                </Link>
                <Link to="/reviewlist" className="SideDrawerNavLink mdc-list-item mdc-typography--title">
                  My Reviews
                </Link>
              </nav>
            </div>
            <div className="SideDrawerSubNavigation">
              <Link to="/info" className="SideDrawerNavLink mdc-list-item mdc-typography--title">
                App Info
              </Link>
            </div>
          </nav>
        </aside>

        <div className="App-Content">
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/reviewlist" component={ReviewListContainer}/>
            <Route exact path="/reviewform" component={ReviewFormContainer}/>
            <Route component={PageNotFound} />
          </Switch>
        </div>

        <div className="App-Footer">
        </div>

      </div>
    );
  }
}

export default App;
