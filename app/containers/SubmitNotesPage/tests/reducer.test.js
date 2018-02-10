
import { fromJS } from 'immutable';
import submitNotesPageReducer from '../reducer';

describe('submitNotesPageReducer', () => {
  it('returns the initial state', () => {
    expect(submitNotesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
