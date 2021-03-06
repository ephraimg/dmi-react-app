
import React from 'react';
import { shallow } from 'enzyme';

import Li from '../index';

describe('<Li />', () => {
  it('should render an <li> tag', () => {
    const renderedComponent = shallow(<Li />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Li id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Li attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
