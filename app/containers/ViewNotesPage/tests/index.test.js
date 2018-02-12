/**
 * Test the ViewNotesPage
 */

import { mapDispatchToProps } from '../index';
import { getNotes } from '../actions';

describe('<ViewNotesPage />', () => {
  describe('mapDispatchToProps', () => {
    describe('onComponentMount', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onComponentMount).toBeDefined();
      });

      it('should dispatch getNotes when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onComponentMount();
        expect(dispatch).toHaveBeenCalledWith(getNotes());
      });
    });
  });
});
