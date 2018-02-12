
import React from 'react';
import { shallow } from 'enzyme';

import NoteListHeader from '../index';

const notes = [{ text: 'A sample note for the test!' }];

describe('<NoteListHeader />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<NoteListHeader notes={notes} />);
    expect(renderedComponent.type()).toEqual('div');
  });
});

