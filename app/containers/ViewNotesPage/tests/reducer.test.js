
import { fromJS } from 'immutable';
import viewNotesPageReducer from '../reducer';
import {
  notesGotten,
  notesGetError,
} from '../actions';

describe('viewNotesPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      notes: [],
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(viewNotesPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the notesGotten action correctly', () => {
    const fixture = [{ text: 'A sample note for the test!' }];
    const expectedResult = state.set('notes', fixture);

    expect(viewNotesPageReducer(state, notesGotten(fixture))).toEqual(expectedResult);
  });

  it('should handle the notesGetError action correctly', () => {
    const expectedResult = state.set('notes', false);

    expect(viewNotesPageReducer(state, notesGetError())).toEqual(expectedResult);
  });
});
