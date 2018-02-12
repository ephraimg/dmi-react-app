/**
*
* NoteListItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

export function NoteListItem(props) {
  return (
    <li>
      {props.note.text}
    </li>
  );
}

NoteListItem.propTypes = {
  note: PropTypes.object,
};
