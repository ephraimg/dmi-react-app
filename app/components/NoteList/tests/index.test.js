
import React from 'react';
import { shallow } from 'enzyme';

import NoteList from '../index';

const notes = [{ text: 'A sample note for the test!' }];

describe('<NoteList />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<NoteList notes={notes} />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should render a <Ul> tag', () => {
    const renderedComponent = shallow(<NoteList notes={notes} />);
    expect(renderedComponent.find('Ul').length).toEqual(1);
  });

  it('should render a <NoteListHeader> tag', () => {
    const renderedComponent = shallow(<NoteList notes={notes} />);
    expect(renderedComponent.find('NoteListHeader').length).toEqual(1);
  });
});

