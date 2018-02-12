import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';

describe('<NavBar />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<NavBar />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<NavBar id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<NavBar attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
