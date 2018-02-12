
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('div').length).toEqual(1);
  });
  it('should render a NavBar', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('NavBar').length).toEqual(1);
  });
  it('should render an AppDescription', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('AppDescription').length).toEqual(1);
  });
  it('should render an AppSubDescription', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('AppSubDescription').length).toEqual(1);
  });
});
