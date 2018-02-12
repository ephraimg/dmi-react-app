
import { fromJS } from 'immutable';
import submitNotesPageReducer from '../reducer';
import {
  changeNote,
  noteSaved,
  noteSaveError,
  noteSaveReset,
} from '../actions';

describe('submitNotesPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      note: '',
      wasSaved: null,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(submitNotesPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeNote action correctly', () => {
    const fixture = 'A changed note for the test!';
    const expectedResult = state.set('note', fixture);

    expect(submitNotesPageReducer(state, changeNote(fixture))).toEqual(expectedResult);
  });

  it('should handle the noteSaveError action correctly', () => {
    const expectedResult = state.set('wasSaved', false);

    expect(submitNotesPageReducer(state, noteSaveError())).toEqual(expectedResult);
  });

  it('should handle the noteSaveReset action correctly', () => {
    const expectedResult = state.set('wasSaved', null);

    expect(submitNotesPageReducer(state, noteSaveReset())).toEqual(expectedResult);
  });

  it('should handle the noteSaved action correctly', () => {
    const expectedResult = state.set('wasSaved', true);

    expect(submitNotesPageReducer(state, noteSaved())).toEqual(expectedResult);
  });
});
