import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// Firebase setup
import firebase from "firebase/app";
import "firebase/auth";
import setAuthToken from "./utils/setAuthToken";

// Module Imports
import { ReviewForm, Review, ReviewList, ReviewEdit } from "./review";
import { Navbar } from "./navbar";
import { SideDrawer } from "./sidedrawer";
import Info from "./info/Info";
import { MoviesHome } from "./movies";

// Containers
import PageNotFound from "./components/PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./home/HomeContainer";

// CSS and assets
import "@material/layout-grid/dist/mdc.layout-grid.min.css";
import "@material/typography/dist/mdc.typography.min.css";
import "@material/elevation/dist/mdc.elevation.min.css";
import "./App.css";
import { MDCTemporaryDrawer } from "@material/drawer/dist/mdc.drawer.min";

class App extends Component {
	/**
   * React only provides 'this' context to lifecycle methods such as the constructor.
   */
	constructor(props) {
		super(props);

		// console.log('App props', this.props);

		// Check for token
		if (localStorage.googleToken) {
			console.log("Local token found");
			// Set auth token header
			setAuthToken(localStorage.googleToken);
			// Grab the user from firebase
			firebase.auth().onAuthStateChanged((res) => {
				if (res) {
					const { displayName, email, photoURL, uid } = res.providerData[0];
					const user = {
						displayName: displayName,
						email: email,
						image: photoURL,
						googleID: uid,
					};
					this.props.login(user);
				}
			});
		}
	}

	componentDidMount() {
		this.drawer = new MDCTemporaryDrawer(document.querySelector(".mdc-drawer--temporary"));
		this.props.history.listen((location, action) => (this.drawer.open = false));
	}

	componentWillUnmount() {
		// console.log('App component unmounting...');
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
	}

	render() {
		const getClassNames = () => {
			if (this.props.location.pathname !== "/") {
				return "App-Content mdc-top-app-bar--fixed-adjust";
			} else {
				return "App-Content";
			}
		};

		return (
			<div className="App">
				<Navbar routes={this.props} />
				<SideDrawer history={this.props.history} />

				<ErrorBoundary>
					<div className={getClassNames()}>
						<Switch>
							<PrivateRoute path="/review/edit/:id" component={ReviewEdit} />
							<PrivateRoute exact path="/reviewlist" component={ReviewList} />
							<PrivateRoute exact path="/reviewform" component={ReviewForm} />
							<Route exact path="/" component={Home} />
							<Route path="/movies" component={MoviesHome} />
							<Route path="/info" component={Info} />
							<Route path="/review/:id" component={Review} />
							<Route component={PageNotFound} />
						</Switch>
					</div>
				</ErrorBoundary>

				<div className="App-Footer" />
			</div>
		);
	}
}

export default App;
