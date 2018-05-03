import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Module Imports
import { ReviewForm, Review, ReviewList, ReviewEdit } from './review';
import { Navbar } from './navbar';
import { SideDrawer } from './sidedrawer';

// Containers
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';

// CSS and assets
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import './App.css';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

class App extends Component {

  /**
   * React only provides 'this' context to lifecycle methods such as the constructor.
   */
  constructor(props) {
    super(props);

    // console.log('App props', this.props);

    this.props.history.listen((location, action) => {
      console.log('route change');
      console.log(location, action);
      this.drawer.open = false;
    })
  }

  componentDidMount() {
    //console.log('App.js component mounted.');
    this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
  }

  componentWillUnmount() {
    // console.log('App component unmounting...');
  }

  render() {
    const getClassNames = () => {
      if (this.props.location.pathname !== '/') {
        return "App-Content mdc-toolbar-fixed-adjust";
      } else {
        return "App-Content";
      }
    }

    return (
      <div className="App">
 
        <Navbar routes={this.props}/>
        <SideDrawer />

        <ErrorBoundary>
          <div className={getClassNames()}>
            <Switch>
              <Route exact path="/" component={HomeContainer}/>
              <Route exact path="/login" component={LoginContainer}/>
              <Route path="/review/edit/:id" component={ReviewEdit} />
              <Route path="/review/:id" component={Review} />
              <Route exact path="/reviewlist" component={ReviewList}/>
              <Route exact path="/reviewform" component={ReviewForm}/>
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </ErrorBoundary>

        <div className="App-Footer">
        </div>

      </div>
    );
  }
}

export default App;
