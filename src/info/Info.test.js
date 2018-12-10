import React from 'react';
import { mount } from 'enzyme';

import Info from './Info';

describe('Info', () => {
  // Setup the enzyme ReactWrapper for all tests
  let mountedInfo;
  // Use the Info function to fetch the enzyme component
  const info = () => {
    if (!mountedInfo) {
      mountedInfo = mount(<Info />);
    }
    return mountedInfo;
  };

  // Resets the mounted component beforeEach test
  beforeEach(() => {
    mountedInfo: undefined;
  });

  // All tests will go here
  it('should render without throwing an error', () => {
      const grid = info().find('.mdc-layout-grid');
      expect(grid.length).toEqual(1);
  });

});
