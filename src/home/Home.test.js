import React from 'react';
// shallow rendering avoids asserting on child components
import { shallow } from 'enzyme';

import Home from './Home';

describe('Home', () => {
  let mountedHome;

  const home = () => {
    if (!mountedHome) {
      mountedHome = shallow(<Home />);
    }
    return mountedHome;
  };

  beforeEach(() => {
    mountedHome: undefined;
  });

  // begin tests

  describe('Action Button', () => {

    const button = home().find('#CTAButton');

    it('should render action button', () => {
      expect(button.length).toEqual(1);
    });

    it('should display loggedIn message', () => {
      // Grab only the first text in the button
      expect(button.childAt(0).text()).toEqual('Write a Review');
    });
  });
});
