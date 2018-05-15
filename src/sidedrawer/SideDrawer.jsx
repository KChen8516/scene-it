import React from 'react';
import { Link } from 'react-router-dom';

import { Login } from '../login';
import '@material/drawer/dist/mdc.drawer.min.css';
import '@material/list/dist/mdc.list.min.css';
import './SideDrawer.css';

const SideDrawer = props => (
    <aside className="mdc-drawer mdc-drawer--temporary mdc-typography">
        <nav className="mdc-drawer__drawer" id="DrawerBody">
            
            <header className="mdc-drawer__header">
                <div className="mdc-drawer__header-content" id="DrawerHeader">
                    <Link to="/">
                        <img src={props.user.image} id="DrawerImage" alt="Side Drawer"/>
                    </Link>
                    <h1 className="mdc-typography--title">{props.user.displayName}</h1>
                    <p className="mdc-typography--caption">Member since 2017 | {props.isLoggedIn ? 'Authenticated' : 'Not' }</p>
                </div>
            </header>
            
            <div id="DrawerMainNav">
                <nav className="mdc-drawer__content mdc-list">
                    <Link to="/reviewform" className="DrawerNavLink mdc-list-item">
                        Write a Review
                    </Link>
                    <Link to="/reviewlist" className="DrawerNavLink mdc-list-item mdc-typography--title">
                        My Reviews
                    </Link>
                </nav>
            </div>
            <div id="DrawerSubNav">
                <Link to="/info" className="DrawerNavLink mdc-list-item mdc-typography--title">
                    App Info
                </Link>
                <Login />
            </div>

        </nav>
    </aside>
)

export default SideDrawer;