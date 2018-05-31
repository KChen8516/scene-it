import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MDCTopAppBar } from '@material/top-app-bar/dist/mdc.topAppBar.min';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer.min';
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';
import './Navbar.css';

class Navbar extends Component {

    constructor() {
        super();
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    componentDidMount() {
        this.topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));
        this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
    }

    handleNavigation() {
        let currentRoute = this.props.routes.location.pathname;
        if(currentRoute === '/reviewform' ||
           /\/review\/edit/.test(currentRoute) ||
           currentRoute === '/info'
        ) {
            this.props.routes.history.goBack();
        } else {
            this.drawer.open = true;
        }
    }

    render() {
        const SubNavBar = {background: '#f9f9f9', color: '#4a4a4a'};
        let currentRoute = this.props.routes.location.pathname;
        let NavbarTitle = '';
        switch(currentRoute) {
            case '/': NavbarTitle = 'Scene It'; break;
            case '/reviewform': NavbarTitle = 'New Review'; break;
            case '/reviewlist': NavbarTitle = 'My Reviews'; break;
            case '/info': NavbarTitle = 'App Info'; break;
            default: NavbarTitle = '404'
        }
        // Regex test for review/:id and review/edit/:id routes
        if(/\/review\//.test(currentRoute)) NavbarTitle = 'Review';
        if(/\/review\/edit/.test(currentRoute)) NavbarTitle = 'Edit Review';

        let showBackButton = false;

        if (currentRoute === '/reviewform' ||
            /\/review\/edit/.test(currentRoute) ||
            currentRoute === '/info'
        ) {
            showBackButton = true
        } else {showBackButton = false}
        
        return (
            <header 
              className="Navbar mdc-top-app-bar mdc-top-app-bar--fixed"
              style={currentRoute !== '/' ? SubNavBar : null}
            >
                <div className="mdc-top-app-bar__row">
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" onClick={this.handleNavigation}>
                        {showBackButton ? (
                            <div style={{display:'flex', alignItems:'center'}}>
                                <a className="material-icons">keyboard_arrow_left</a>
                                <span style={{marginLeft:-5, fontWeight:200}}>Back</span>
                            </div>
                        ) : (
                            <a
                              id="menu"
                              className="material-icons mdc-top-app-bar__navigation-icon"
                              style={currentRoute !== '/' ? {color: '#4a4a4a'} : null}
                            >menu</a>
                        )}
                    </section>
                    <section className="mdc-top-app-bar__section" style={{justifyContent: 'center'}}>
                        {currentRoute === '/' ? 
                            <span className="Navbar-Title">{NavbarTitle}</span> :
                            <span className="Navbar-Title--Sub">{NavbarTitle}</span>
                        }
                    </section>
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        {showBackButton ? (
                            <div style={{height:20,width:50}}></div>
                        ):(
                            <Link to="/reviewform" style={{textDecoration: 'none'}}>
                                <i
                                  className="material-icons mdc-top-app-bar__action-item"
                                  style={currentRoute !== '/' ? {color: '#4a4a4a'} : null}
                                >create</i>
                            </Link>
                        )}
                    </section>
                </div>
            </header>
        );
    }
}

export default Navbar;