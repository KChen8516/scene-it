import React, { Component } from 'react';
import Home from './Home';
import Glide from '@glidejs/glide';

class HomeContainer extends Component {
  componentDidMount() {
    // PR pending for preventing sliding at the start and end
    // https://github.com/glidejs/glide/issues/219
    new Glide('.glide', {
      type: 'carousel',
      gap: 0
    }).mount();
  }

  render() {
      return <Home />;
  }
}

export default HomeContainer;
