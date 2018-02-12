/**
 *
 * ViewNotesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import NoteList from 'components/NoteList';
import Div from 'components/Div';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { getNotes } from './actions';
import { makeSelectNotes, makeSelectViewNotesPage } from './selectors';

export class ViewNotesPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onComponentMount();
  }
  render() {
    // Pass [] instead of a List if no notes yet saved
    const noteListProps = Array.isArray(this.props.notes)
      ? this.props.notes
      : [];
    return (
      <Div>
        <NoteList notes={noteListProps} />
      </Div>
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
