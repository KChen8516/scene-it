import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />      
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
