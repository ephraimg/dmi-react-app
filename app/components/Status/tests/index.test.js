
import React from 'react';
import { shallow } from 'enzyme';

import Status from '../index';

describe('<Status />', () => {
  it('should render a <span> tag', () => {
    const renderedComponent = shallow(<Status />);
    expect(renderedComponent.type()).toEqual('span');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Status id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Status attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
