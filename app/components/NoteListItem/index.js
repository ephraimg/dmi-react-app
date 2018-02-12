/**
*
* NoteListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Li from 'components/Li';

const NoteListItem = (props) => (
  <Li>
    {props.note.text}
  </Li>
);

export default NoteListItem;

NoteListItem.propTypes = {
  note: PropTypes.object,
};
