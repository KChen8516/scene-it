import React, { Component } from 'react';

import { MDCToolbar } from '@material/toolbar';
import { MDCTemporaryDrawer } from '@material/drawer';
import '@material/toolbar/dist/mdc.toolbar.min.css';
import './Navbar.css';

class Navbar extends Component {

    componentDidMount() {
        new MDCToolbar(document.querySelector('.mdc-toolbar'));
        const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
        document.querySelector('#menu').addEventListener('click', () => drawer.open = true);
    }

    render() {
        return (
            <header className="Navbar mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall">
                <div className="mdc-toolbar__row">
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-start mdc-toolbar__section--shrink-to-fit">
                        <a
                         id="menu"
                         className="material-icons mdc-toolbar__icon--menu"
                         style={{paddingLeft: 10}}
                        >menu</a>
                    </section>
                    <section className="mdc-toolbar__section">
                        <span className="Navbar-Title mdc-typography--headline">Scene It</span>
                    </section>
                    <section className="mdc-toolbar__section mdc-toolbar__section--align-end mdc-toolbar__section--shrink-to-fit">
                        <a 
                         className="material-icons mdc-toolbar__icon--menu"
                         style={{paddingRight: 10}}
                        >search</a>
                    </section>
                </div>
            </header>
        );
    }
}

export default Navbar;