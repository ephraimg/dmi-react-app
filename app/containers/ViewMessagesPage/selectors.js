import { createSelector } from 'reselect';

/**
 * Direct selector to the viewMessagesPage state domain
 */
const selectViewMessagesPageDomain = (state) => state.get('viewMessagesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewMessagesPage
 */

const makeSelectViewMessagesPage = () => createSelector(
  selectViewMessagesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectViewMessagesPage;
export {
  selectViewMessagesPageDomain,
};
