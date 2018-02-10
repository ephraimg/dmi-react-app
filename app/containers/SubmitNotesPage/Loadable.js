/**
 *
 * Asynchronously loads the component for SubmitNotesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
