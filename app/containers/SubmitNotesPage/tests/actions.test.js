
import {
  changeNote,
  saveNote,
  noteSaved,
  noteSaveError,
  noteSaveReset,
} from '../actions';

import {
  CHANGE_NOTE,
  SAVE_NOTE,
  NOTE_SAVED,
  NOTE_SAVE_ERROR,
  NOTE_SAVE_RESET,
} from '../constants';

describe('SubmitNotesPage actions', () => {
  describe('changeNote', () => {
    it('should return the correct type and passed note', () => {
      const fixture = 'A sample note for the test!';
      const expected = {
        type: CHANGE_NOTE,
        text: fixture,
      };
      expect(changeNote(fixture)).toEqual(expected);
    });
  });

  describe('saveNote', () => {
    it('should return the correct type', () => {
      const expected = {
        type: SAVE_NOTE,
      };
      expect(saveNote()).toEqual(expected);
    });
  });

  describe('noteSaved', () => {
    it('should return the correct type', () => {
      const expected = {
        type: NOTE_SAVED,
      };
      expect(noteSaved()).toEqual(expected);
    });
  });

  describe('noteSaveError', () => {
    it('should return the correct type', () => {
      const expected = {
        type: NOTE_SAVE_ERROR,
      };
      expect(noteSaveError()).toEqual(expected);
    });
  });

  describe('noteSaveReset', () => {
    it('should return the correct type', () => {
      const expected = {
        type: NOTE_SAVE_RESET,
      };
      expect(noteSaveReset()).toEqual(expected);
    });
  });
});
