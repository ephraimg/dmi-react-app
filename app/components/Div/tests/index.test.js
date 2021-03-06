import React from 'react';
import { shallow } from 'enzyme';

import Div from '../index';

describe('<Div />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Div />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Div id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Div attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

