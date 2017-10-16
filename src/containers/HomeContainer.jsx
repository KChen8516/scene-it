import React, { Component } from 'react';

import HomeCarousel from '../components/HomeCarousel';

declare var slick;
declare var $;

class HomeContainer extends Component{

  componentDidMount() {
    $('.HomeCarousel').slick({
      dots: true,
      slidesToShow: 1,
      arrows: false,
      infinite: false
    });
  }

  render() {
    return <HomeCarousel />
  }
}

export default HomeContainer;
