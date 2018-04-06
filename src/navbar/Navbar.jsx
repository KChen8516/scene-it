import React, { Component } from 'react';

import { MDCToolbar } from '@material/toolbar';
import { MDCTemporaryDrawer } from '@material/drawer';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './Navbar.css';

class Navbar extends Component {

    constructor() {
        super();
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    componentDidMount() {
        new MDCToolbar(document.querySelector('.mdc-toolbar'));
        this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
    }

    handleNavigation() {
        if(this.props.routes.location.pathname === '/reviewform') {
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
            case '/review': NavbarTitle = 'Review'; break;
            case '/reviewlist': NavbarTitle = 'My Reviews'; break;
            default: NavbarTitle = '404'
        }
        return (
            <header 
              className="Navbar mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall"
              style={currentRoute !== '/' ? SubNavBar : null}
            >
                <div className="mdc-toolbar__row">
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start mdc-toolbar__section--shrink-to-fit" onClick={this.handleNavigation}>
                        {currentRoute === '/reviewform' ? (
                            <div style={{display:'flex', alignItems:'center'}}>
                                <a className="material-icons mdc-toolbar__icon--menu">keyboard_arrow_left</a>
                                <span style={{marginLeft:-5, fontWeight:200}}>Back</span>
                            </div>
                        ) : (
                            <a
                              id="menu"
                              className="material-icons mdc-toolbar__icon--menu"
                              style={{paddingLeft: 10}}
                            >menu</a>
                        )}
                    </section>
                    <section className="mdc-toolbar__section">
                        {currentRoute === '/' ? 
                            <span className="Navbar-Title mdc-typography--headline">{NavbarTitle}</span> :
                            <span className="Navbar-Title--Sub">{NavbarTitle}</span>
                        }
                    </section>
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
                        {currentRoute === '/reviewform' ? (
                            <div style={{height:20,width:50}}></div>
                        ):(
                            <a
                              className="material-icons mdc-toolbar__icon--menu"
                              style={{paddingRight: 10}}
                            >search</a>
                        )}
                    </section>
                </div>
            </header>
        );
    }
}

export default Navbar;