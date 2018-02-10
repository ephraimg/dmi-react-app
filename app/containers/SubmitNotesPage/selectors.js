import { createSelector } from 'reselect';

/**
 * Direct selector to the submitNotesPage state domain
 */
const selectSubmitNotesPageDomain = (state) => state.get('submitNotesPage');

/**
 * Other specific selectors
 */
const makeSelectNote = () => createSelector(
  selectSubmitNotesPageDomain,
  (substate) => substate.get('note')
);

/**
 * Default selector used by SubmitNotesPage
 */

const makeSelectSubmitNotesPage = () => createSelector(
  selectSubmitNotesPageDomain,
  (substate) => substate.toJS()
);

export {
  makeSelectSubmitNotesPage,
  selectSubmitNotesPageDomain,
  makeSelectNote,
};
