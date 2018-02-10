/*
 *
 * SubmitNotesPage actions
 *
 */

import {
  CHANGE_NOTE,
  SAVE_NOTE,
} from './constants';

export function changeNote(text) {
  return {
    type: CHANGE_NOTE,
    text,
  };
}

export function saveNote(text) {
  return {
    type: SAVE_NOTE,
    text,
  };
}
