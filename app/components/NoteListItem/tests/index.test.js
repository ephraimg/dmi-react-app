
import React from 'react';
import { shallow } from 'enzyme';

import NoteListItem from '../index';

const note = { text: 'A sample note for the test!' };

describe('<NoteListItem />', () => {
  it('should render an <Li> tag', () => {
    const renderedComponent = shallow(<NoteListItem note={note} />);
    expect(renderedComponent.find('Li').length).toEqual(1);
  });
});
