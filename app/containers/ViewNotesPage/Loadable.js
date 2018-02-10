/**
 *
 * Asynchronously loads the component for ViewNotesPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
