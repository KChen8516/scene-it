import React from 'react';

import '../styles/Login.css';

const Login = () => (
    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="FormTitle mdc-layout-grid__cell">
          <h1 className="mdc-typography--headline">Log in</h1>
        </div>
        <div className="mdc-layout-grid__cell">
          <form className="LoginForm">
            <div className="Email mdc-textfield">
              <input type="text" id="email" className="mdc-textfield__input" />
              <label className="mdc-textfield__label" htmlFor="email">Email</label>
            </div>
            <div className="Password mdc-textfield">
              <input type="text" id="password" className="mdc-textfield__input" />
              <label className="mdc-textfield__label" htmlFor="password">Password</label>
            </div>
            <div className="Submit">
              <button className="mdc-button mdc-button--raised">
                Log in
              </button>
            </div>
          </form>
          {/*{user.email} - {user.password}*/}
        </div>
      </div>
    </div>
);

export default Login;
