
import { fromJS } from 'immutable';
import submitMessagesPageReducer from '../reducer';

describe('submitMessagesPageReducer', () => {
  it('returns the initial state', () => {
    expect(submitMessagesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
