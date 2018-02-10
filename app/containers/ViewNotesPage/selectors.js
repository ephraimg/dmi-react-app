import { createSelector } from 'reselect';

/**
 * Direct selector to the viewNotesPage state domain
 */
const selectViewNotesPageDomain = (state) => state.get('viewNotesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewNotesPage
 */

const makeSelectViewNotesPage = () => createSelector(
  selectViewNotesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectViewNotesPage;
export {
  selectViewNotesPageDomain,
};
