/**
 *
 * ViewNotesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NoteList } from 'components/NoteList';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { getNotes } from './actions';
import { makeSelectNotes, makeSelectViewNotesPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class ViewNotesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onComponentMount();
  }

  render() {
    const noteListProps = Array.isArray(this.props.notes)
      ? this.props.notes
      : [];
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <NoteList notes={noteListProps} />
      </div>
    );
  }
}

ViewNotesPage.propTypes = {
  notes: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
  onComponentMount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onComponentMount: () => dispatch(getNotes()),
  };
}

const mapStateToProps = createStructuredSelector({
  notes: makeSelectNotes(),
  viewnotespage: makeSelectViewNotesPage(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewNotesPage', reducer });
const withSaga = injectSaga({ key: 'viewNotesPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewNotesPage);
