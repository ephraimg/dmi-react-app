/**
*
* NoteList
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { NoteListHeader } from '../NoteListHeader/index';
import { NoteListItem } from '../NoteListItem/index';
import messages from './messages';

export function NoteList(props) {
  return (
    <div>
      <NoteListHeader>
        <FormattedMessage {...messages.header} />
      </NoteListHeader>
      <ul>
        {props.notes.map((item) => (
          <NoteListItem note={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array,
};
