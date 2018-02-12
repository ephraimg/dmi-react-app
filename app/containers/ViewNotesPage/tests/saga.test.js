/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import watchGetNotes, { getNotes } from '../saga';
import { GET_NOTES } from '../constants';

// const note = 'Sample note for tests!';

describe('watchGetNotes Saga', () => {
  const watchGetNotesSaga = watchGetNotes();

  it('should start task to watch for GET_NOTES action', () => {
    const takeLatestDescriptor = watchGetNotesSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_NOTES, getNotes));
  });
});
