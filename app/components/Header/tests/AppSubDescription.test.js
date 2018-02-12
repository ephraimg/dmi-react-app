import React from 'react';
import { shallow } from 'enzyme';

import AppSubDescription from '../AppSubDescription';

describe('<AppSubDescription />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<AppSubDescription />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<AppSubDescription id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AppSubDescription attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
