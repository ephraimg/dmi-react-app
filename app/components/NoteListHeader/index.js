/**
*
* NoteListHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function NoteListHeader() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}
