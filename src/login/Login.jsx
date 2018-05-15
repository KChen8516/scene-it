import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import setAuthToken from '../utils/setAuthToken';

// Configure Firebase
const config = {
    apiKey: "AIzaSyCsJ30UuM45qAWTSLkf-ug1Wof1hBiTONc",
    authDomain: "sceneit-dev.firebaseapp.com",
    databaseURL: "https://sceneit-dev.firebaseio.com",
    projectId: "sceneit-dev",
    storageBucket: "sceneit-dev.appspot.com",
    messagingSenderId: "343767206718"
};
firebase.initializeApp(config);

class Login extends Component {

    state = {
        isSignedIn: false
    };

    // Configure FirebaseUI
    uiConfig = {
        signInFlow: 'redirect',
        signInSuccessUrl: '/',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
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
                localStorage.setItem('googleToken', accessToken);
                // Set token to Axios auth header
                setAuthToken(accessToken);

                const user = {
                    googleID: googleProfile.id,
                    displayName: authResult.user.displayName,
                    firstName: googleProfile.given_name,
                    lastName: googleProfile.family_name,
                    email: googleProfile.email,
                    image: googleProfile.picture
                }

                this.props.login(user);
            }
        }
    };

    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({isSignedIn: !!user})
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        return <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
    }
}

export default Login;