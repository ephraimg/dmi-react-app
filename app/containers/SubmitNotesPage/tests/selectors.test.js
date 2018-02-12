import { fromJS } from 'immutable';
import {
  selectSubmitNotesPageDomain,
  makeSelectNote,
  makeSelectSaveStatus,
} from '../selectors';

describe('selectSubmitNotesPageDomain', () => {
  it('should select the SubmitNotesPage state', () => {
    const submitNotesPageState = fromJS({
      someData: {},
    });
    const mockedState = fromJS({
      submitNotesPage: submitNotesPageState,
    });
    expect(selectSubmitNotesPageDomain(mockedState)).toEqual(submitNotesPageState);
  });
});

describe('makeSelectNote', () => {
  const noteSelector = makeSelectNote();
  it('should select the note', () => {
    const note = 'A sample note for the test!';
    const mockedState = fromJS({
      submitNotesPage: {
        note,
      },
    });
    expect(noteSelector(mockedState)).toEqual(note);
  });
});

describe('makeSelectSaveStatus', () => {
  const saveStatusSelector = makeSelectSaveStatus();
  it('should select the note', () => {
    const wasSaved = true;
    const mockedState = fromJS({
      submitNotesPage: {
        wasSaved,
      },
    });
    expect(saveStatusSelector(mockedState)).toEqual(wasSaved);
  });
});
