/**
 *
 * SubmitNotesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Form from 'components/Form';
import Input from 'components/Input';
import Div from 'components/Div';
import Button from 'components/Button';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeNote, saveNote } from './actions';
import { makeSelectNote, makeSelectSubmitNotesPage, makeSelectSaveStatus } from './selectors';

export class SubmitNotesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let saveStatusMessage;
    if (this.props.saveStatus !== null) {
      saveStatusMessage = this.props.saveStatus
        ? <FormattedMessage {...messages.wasSavedMessage} />
        : <FormattedMessage {...messages.notSavedMessage} />;
    }
    return (
      <Div>
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="note">
            <FormattedMessage {...messages.inputDescription} />
            <div>
              <Button>
                Save
              </Button>
              <Input
                id="note"
                type="text"
                placeholder={messages.inputPlaceholder.defaultMessage}
                value={this.props.note}
                onChange={this.props.onChangeNote}
              />
              {saveStatusMessage}
            </div>
          </label>
        </Form>
      </Div>
    );
  }
}

SubmitNotesPage.propTypes = {
  note: PropTypes.string,
  saveStatus: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  onChangeNote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  note: makeSelectNote(),
  submitnotespage: makeSelectSubmitNotesPage(),
  saveStatus: makeSelectSaveStatus(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNote: (evt) => dispatch(changeNote(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveNote());
      dispatch(changeNote(''));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'submitNotesPage', reducer });
const withSaga = injectSaga({ key: 'submitNotesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SubmitNotesPage);
