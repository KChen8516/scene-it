import React from "react";
import { Link } from "react-router-dom";

import { Login } from "../Login";
import Ariana from "../assets/ariana-grande.jpg";
import "@material/drawer/dist/mdc.drawer.min.css";
import "@material/list/dist/mdc.list.min.css";
import "./SideDrawer.css";

const SideDrawer = (props) => (
	<aside className="mdc-drawer mdc-drawer--temporary mdc-typography">
		<nav className="mdc-drawer__drawer" id="DrawerBody">
			<header className="mdc-drawer__header">
				<div className="mdc-drawer__header-content" id="DrawerHeader">
					<Link to="/" style={{ textDecoration: "none" }}>
						<img src={props.isLoggedIn ? props.user.image : Ariana} id="DrawerImage" alt="Side Drawer" />
					</Link>
					<h1 className="mdc-typography--title">{props.isLoggedIn ? props.user.displayName : "Welcome!"}</h1>
					<p className="mdc-typography--caption">
						Member since 2018 | {props.isLoggedIn ? "Authenticated" : "Not Authenticated"}
					</p>
				</div>
			</header>

			{props.isLoggedIn ? (
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
			) : null}

			<div id="DrawerSubNav">
				{/* <Link to="/movies" className="DrawerNavLink mdc-list-item mdc-typography--title">
          Movies
        </Link> */}
				<Link to="/info" className="DrawerNavLink mdc-list-item mdc-typography--title">
					App Info
				</Link>
				<Login history={props.history} />
			</div>
		</nav>
	</aside>
);

export default SideDrawer;
