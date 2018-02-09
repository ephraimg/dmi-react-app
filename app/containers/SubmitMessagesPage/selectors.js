import { createSelector } from 'reselect';

/**
 * Direct selector to the submitMessagesPage state domain
 */
const selectSubmitMessagesPageDomain = (state) => state.get('submitMessagesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitMessagesPage
 */

const makeSelectSubmitMessagesPage = () => createSelector(
  selectSubmitMessagesPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectSubmitMessagesPage;
export {
  selectSubmitMessagesPageDomain,
};
