
import React from 'react';
import { shallow } from 'enzyme';

import Ul from '../index';

describe('<Ul />', () => {
  it('should render a <ul> tag', () => {
    const renderedComponent = shallow(<Ul />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Ul id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Ul attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
