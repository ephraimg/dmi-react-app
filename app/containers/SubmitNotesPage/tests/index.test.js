/**
 * Test the SubmitNotesPage
 */

import { mapDispatchToProps } from '../index';
import { changeNote, saveNote } from '../actions';

describe('<SubmitNotesPage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onChangeNote', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeNote).toBeDefined();
      });

      it('should dispatch changeNote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const note = 'A sample note for the test!';
        result.onChangeNote({ target: { value: note } });
        expect(dispatch).toHaveBeenCalledWith(changeNote(note));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch saveNote when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(saveNote());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
