import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar.min';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer.min';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleNavigation = this.handleNavigation.bind(this);
    this.setNavbarTitle = this.setNavbarTitle.bind(this);
    this.setRightTopBarItem = this.setRightTopBarItem.bind(this);
  }

  componentDidMount() {
    this.topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
    this.drawer = new MDCTemporaryDrawer(
      document.querySelector('.mdc-drawer--temporary')
    );
  }

  handleNavigation() {
    let currentRoute = this.props.location.pathname;
    if (
      currentRoute === '/reviewform' ||
      /\/review\/edit/.test(currentRoute) ||
      currentRoute === '/info'
    ) {
      this.props.history.goBack();
    } else {
      this.drawer.open = true;
    }
  }

  setNavbarTitle() {
    let { location } = this.props;

    // Regex test for review/:id and review/edit/:id routes
    if (/\/review\//.test(location.pathname)) return 'Review';
    if (/\/review\/edit/.test(location.pathname)) return 'Edit Review';

    switch (location.pathname) {
      case '/':
        return 'Scene It';
      case '/reviewform':
        return 'New Review';
      case '/reviewlist':
        return 'My Reviews';
      case '/info':
        return 'App Info';
      case '/movies':
        return 'Movies';
      default:
        return '404';
    }
  }

  setRightTopBarItem() {
    let { location, isLoggedIn } = this.props;

    if (!isLoggedIn) return <span style={{ color: 'white', fontSize: 20 }}>Login</span>;

    // Routes to show 'Back' button
    if (
      location.pathname === '/reviewform' ||
      /\/review\/edit/.test(location.pathname) ||
      location.pathname === '/info'
    ) {
      return <div style={{ height: 20, width: 50 }} />;
    } else {
      return (
        <Link to="/reviewform" style={{ textDecoration: 'none' }}>
          <i
            className="material-icons mdc-top-app-bar__action-item"
            style={location.pathname !== '/' ? { color: '#4a4a4a' } : null}
          >
            create
          </i>
        </Link>
      );
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    let NavbarTitle = this.setNavbarTitle();
    let rightTopBarItem = this.setRightTopBarItem();
    let currentRoute = this.props.location.pathname;

    const SubNavBar = { background: '#f9f9f9', color: '#4a4a4a' };
    // switch (currentRoute) {
    //   case '/':
    //     NavbarTitle = 'Scene It';
    //     break;
    //   case '/reviewform':
    //     NavbarTitle = 'New Review';
    //     break;
    //   case '/reviewlist':
    //     NavbarTitle = 'My Reviews';
    //     break;
    //   case '/info':
    //     NavbarTitle = 'App Info';
    //     break;
    //   case '/movies':
    //     NavbarTitle = 'Movies';
    //     break;
    //   default:
    //     NavbarTitle = '404';
    // }
    // // Regex test for review/:id and review/edit/:id routes
    // if (/\/review\//.test(currentRoute)) NavbarTitle = 'Review';
    // if (/\/review\/edit/.test(currentRoute)) NavbarTitle = 'Edit Review';

    let showBackButton = false;

    if (
      currentRoute === '/reviewform' ||
      /\/review\/edit/.test(currentRoute) ||
      currentRoute === '/info'
    ) {
      showBackButton = true;
    } else {
      showBackButton = false;
    }

    return (
      <header
        className="Navbar mdc-top-app-bar mdc-top-app-bar--fixed"
        style={currentRoute !== '/' ? SubNavBar : null}
      >
        <div className="mdc-top-app-bar__row">
          <section
            className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
            onClick={this.handleNavigation}
          >
            {showBackButton ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <a className="material-icons">keyboard_arrow_left</a>
                <span style={{ marginLeft: -5, fontWeight: 200 }}>Back</span>
              </div>
            ) : (
              <a
                id="menu"
                className="material-icons mdc-top-app-bar__navigation-icon"
                style={currentRoute !== '/' ? { color: '#4a4a4a' } : null}
              >
                menu
              </a>
            )}
          </section>
          <section
            className="mdc-top-app-bar__section"
            style={{ justifyContent: 'center' }}
          >
            <span className={currentRoute === '/' ? 'Navbar-Title' : 'Navbar-Title--Sub'}>
              {NavbarTitle}
            </span>
          </section>
          <section
            className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
            role="toolbar"
            style={!isLoggedIn ? { justifyContent: 'center' } : null}
          >
            {/* {showBackButton ? (
              <div style={{ height: 20, width: 50 }} />
            ) : (
              
              <Link to="/reviewform" style={{ textDecoration: 'none' }}>
                  <i
                    className="material-icons mdc-top-app-bar__action-item"
                    style={currentRoute !== '/' ? { color: '#4a4a4a' } : null}
                  >
                    create
                  </i>
              </Link>
            )} */}
            {rightTopBarItem}
          </section>
        </div>
      </header>
    );
  }
}

export default Navbar;
