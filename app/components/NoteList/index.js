/**
*
* NoteList
*
*/

/* eslint-disable no-underscore-dangle */

import React from 'react';
import PropTypes from 'prop-types';

import Ul from 'components/Ul';
import NoteListHeader from 'components/NoteListHeader';
import NoteListItem from 'components/NoteListItem';

const NoteList = (props) => (
  <div>
    <NoteListHeader notes={props.notes} />
    <Ul>
      {props.notes.map((item) => (
        <NoteListItem note={item} key={item._id} />
      ))}
    </Ul>
  </div>
);

export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.array,
};
