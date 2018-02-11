/*
 *
 * SubmitNotesPage actions
 *
 */

import {
  CHANGE_NOTE,
  SAVE_NOTE,
  NOTE_SAVED,
  NOTE_SAVE_ERROR,
  NOTE_SAVE_RESET,
} from './constants';

export function changeNote(text) {
  return {
    type: CHANGE_NOTE,
    text,
  };
}

export function saveNote() {
  return {
    type: SAVE_NOTE,
  };
}

export function noteSaved() {
  return {
    type: NOTE_SAVED,
  };
}

export function noteSaveError() {
  return {
    type: NOTE_SAVE_ERROR,
  };
}

export function noteSaveReset() {
  return {
    type: NOTE_SAVE_RESET,
  };
}
