import { sendNote } from 'utils/request';
import { delay } from 'redux-saga';
import { takeLatest, select, call, put } from 'redux-saga/effects';
import { SAVE_NOTE } from './constants';
import { makeSelectNote } from './selectors';
import { noteSaved, noteSaveError, noteSaveReset } from './actions';

// Individual exports for testing

export function* saveNote() {
  const noteText = yield select(makeSelectNote());
  console.log('noteText is: ', noteText);
  try {
    const config = {
      method: 'post',
      url: '/api/notes',
      data: { text: noteText },
    };
    yield call(sendNote, config);
    yield put(noteSaved()); // don't need data
  } catch (err) {
    yield put(noteSaveError(err));
  }
  yield call(delay, 1500);
  yield put(noteSaveReset());
}

export default function* watchSaveNote() {
  yield takeLatest(SAVE_NOTE, saveNote);
}
