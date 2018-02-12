/**
*
* NoteListHeader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const NoteListHeader = (props) => (
  <div>
    <FormattedMessage
      {...messages.header}
      values={{ count: props.notes.length || '0' }}
    />
  </div>
);

export default NoteListHeader;

NoteListHeader.propTypes = {
  notes: PropTypes.array,
};
