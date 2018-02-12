import React from 'react';
import { shallow } from 'enzyme';

import AppDescription from '../AppDescription';

describe('<AppDescription />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<AppDescription />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<AppDescription id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AppDescription attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
