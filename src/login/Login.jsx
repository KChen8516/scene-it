import React, { Component } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import setAuthToken from "../utils/setAuthToken";

const logoutStyle = {
	color: "white",
	fontWeight: 200,
	fontSize: "1.25rem",
	paddingLeft: 30,
};

// Configure Firebase
const config = {
	apiKey: "AIzaSyCsJ30UuM45qAWTSLkf-ug1Wof1hBiTONc",
	authDomain: "sceneit-dev.firebaseapp.com",
	databaseURL: "https://sceneit-dev.firebaseio.com",
	projectId: "sceneit-dev",
	storageBucket: "sceneit-dev.appspot.com",
	messagingSenderId: "343767206718",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

class Login extends Component {
	constructor(props) {
		super(props);

		this.logoutUser = this.logoutUser.bind(this);
	}

	// Configure FirebaseUI
	uiConfig = {
		signInFlow: "redirect",
		signInSuccessUrl: "/reviewlist",
		signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ],
		callbacks: {
			// Avoid redirects after sign-in.
			// signInSuccess: () => false
			signInSuccessWithAuthResult: (authResult, redirectUrl) => {
				// console.log(authResult);
				// Google profile
				let googleProfile = authResult.additionalUserInfo.profile;
				// Google token
				const { accessToken } = authResult.credential;
				// Store token in LocalStorage
				localStorage.setItem("googleToken", accessToken);
				// Set token to Axios auth header
				setAuthToken(accessToken);

				const user = {
					googleID: googleProfile.id,
					displayName: authResult.user.displayName,
					firstName: googleProfile.given_name,
					lastName: googleProfile.family_name,
					email: googleProfile.email,
					image: googleProfile.picture,
				};

				this.props.login(user);
				return true;
			},
		},
	};

	state = {
		isSignedIn: false,
	};

	// Listen to the Firebase Auth state and set the local state.
	// componentDidMount() {
	//     this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
	//         (user) => {
	//             console.log('Still listening?', user);
	//             // this.setState({isSignedIn: !!user})
	//         }
	//     );
	// }

	// componentWillUnmount() {
	//     this.unregisterAuthObserver();
	// }

	logoutUser() {
		console.log("Logging out.");
		firebase.auth().signOut().then(() => {
			console.log("User logged out?");
			this.props.logout();
			this.props.history.push("/");
		});
	}

	render() {
		if (this.props.isLoggedIn) {
			console.log("Rendering logout button");
			return (
				<div className="mdc-list-item" style={logoutStyle}>
					<span onClick={this.logoutUser}>Logout</span>
				</div>
			);
		} else {
			console.log("Rendering firebaseUI..");
			return <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />;
		}
	}
}

export default Login;
