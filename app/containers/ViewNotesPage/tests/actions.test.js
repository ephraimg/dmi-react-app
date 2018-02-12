
import {
  GET_NOTES,
  NOTES_GOTTEN,
  NOTES_GET_ERROR,
} from '../constants';
import {
  getNotes,
  notesGotten,
  notesGetError,
} from '../actions';

describe('SubmitNotesPage actions', () => {
  describe('getNotes', () => {
    it('should return the correct type', () => {
      const expected = {
        type: GET_NOTES,
      };
      expect(getNotes()).toEqual(expected);
    });
  });

  describe('notesGotten', () => {
    it('should return the correct type', () => {
      const expected = {
        type: NOTES_GOTTEN,
      };
      expect(notesGotten()).toEqual(expected);
    });
  });

  describe('notesGetError', () => {
    it('should return the correct type', () => {
      const expected = {
        type: NOTES_GET_ERROR,
      };
      expect(notesGetError()).toEqual(expected);
    });
  });
});
