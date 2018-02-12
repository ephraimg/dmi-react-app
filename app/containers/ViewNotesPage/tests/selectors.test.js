import { fromJS } from 'immutable';
import {
  selectViewNotesPageDomain,
  makeSelectNotes,
} from '../selectors';

describe('selectViewNotesPageDomain', () => {
  it('should select the SubmitNotesPage state', () => {
    const viewNotesPageState = fromJS({
      someData: {},
    });
    const mockedState = fromJS({
      viewNotesPage: viewNotesPageState,
    });
    expect(selectViewNotesPageDomain(mockedState)).toEqual(viewNotesPageState);
  });
});

describe('makeSelectNotes', () => {
  const noteSelector = makeSelectNotes();
  it('should select the notes', () => {
    const notes = fromJS(
      [{ text: 'A sample note for the test!' }]
    );
    const mockedState = fromJS({
      viewNotesPage: {
        notes,
      },
    });
    expect(noteSelector(mockedState)).toEqual(notes);
  });
});
