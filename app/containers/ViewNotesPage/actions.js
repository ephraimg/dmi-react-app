/*
 *
 * ViewNotesPage actions
 *
 */

import {
  GET_NOTES,
  NOTES_GOTTEN,
  NOTES_GET_ERROR,
} from './constants';

export function getNotes() {
  return {
    type: GET_NOTES,
  };
}

export function notesGotten(notes) {
  return {
    type: NOTES_GOTTEN,
    notes,
  };
}

export function notesGetError() {
  return {
    type: NOTES_GET_ERROR,
  };
}
