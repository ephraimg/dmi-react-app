/*
 *
 * SubmitNotesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_NOTE,
  SAVE_NOTE,
} from './constants';

const initialState = fromJS({
  note: '',
});

function submitNotesPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NOTE:
      return state.set('note', action.text);
    case SAVE_NOTE:
      return state.set('note', '');
    default:
      return state;
  }
}

export default submitNotesPageReducer;
