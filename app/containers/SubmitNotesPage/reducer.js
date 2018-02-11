/*
 *
 * SubmitNotesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_NOTE,
  NOTE_SAVE_ERROR,
  NOTE_SAVE_RESET,
  NOTE_SAVED,
} from './constants';

const initialState = fromJS({
  note: '',
  wasSaved: null,
});

function submitNotesPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NOTE:
      return state.set('note', action.text);
    case NOTE_SAVED:
      return state.set('wasSaved', true);
    case NOTE_SAVE_ERROR:
      return state.set('wasSaved', false);
    case NOTE_SAVE_RESET:
      return state.set('wasSaved', null);
    default:
      return state;
  }
}

export default submitNotesPageReducer;
