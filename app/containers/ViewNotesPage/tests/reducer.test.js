
import { fromJS } from 'immutable';
import viewNotesPageReducer from '../reducer';

describe('viewNotesPageReducer', () => {
  it('returns the initial state', () => {
    expect(viewNotesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
