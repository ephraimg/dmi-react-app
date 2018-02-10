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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Form from 'components/Form';
import Input from 'components/Input';
import { changeNote, saveNote } from './actions';
import { makeSelectNote, makeSelectSubmitNotesPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class SubmitNotesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="note">
            <FormattedMessage {...messages.inputDescription} />
            <Input
              id="note"
              type="text"
              placeholder="Write your note here!"
              value={this.props.note}
              onChange={this.props.onChangeNote}
            />
          </label>
        </Form>
      </div>
    );
  }
}

SubmitNotesPage.propTypes = {
  onSubmitForm: PropTypes.func,
  note: PropTypes.string,
  onChangeNote: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  note: makeSelectNote(),
  submitnotespage: makeSelectSubmitNotesPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeNote: (evt) => dispatch(changeNote(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveNote(evt.target.value));
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
