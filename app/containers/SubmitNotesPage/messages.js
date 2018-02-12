/*
 * SubmitNotesPage Messages
 *
 * This contains all the text for the SubmitNotesPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  inputDescription: {
    id: 'app.containers.SubmitNotesPage.inputDescription',
    defaultMessage: 'Enter a note below, save it, and retrieve it later at \'View Notes\'!',
  },
  wasSavedMessage: {
    id: 'app.containers.SubmitNotesPage.wasSavedMessage',
    defaultMessage: 'Saved!',
  },
  notSavedMessage: {
    id: 'app.containers.SubmitNotesPage.notSavedMessage',
    defaultMessage: 'Error!',
  },
  inputPlaceholder: {
    id: 'app.containers.SubmitNotesPage.inputPlaceholder',
    defaultMessage: 'Your note...',
  },
});
