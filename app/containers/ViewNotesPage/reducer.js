/*
 *
 * ViewNotesPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  NOTES_GOTTEN,
  NOTES_GET_ERROR,
} from './constants';

const initialState = fromJS({
  notes: [],
});

function viewNotesPageReducer(state = initialState, action) {
  switch (action.type) {
    case NOTES_GOTTEN:
      return state.set('notes', action.notes);
    case NOTES_GET_ERROR:
      return state.set('notes', false);
    default:
      return state;
  }
}

export default viewNotesPageReducer;
