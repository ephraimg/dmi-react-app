import { makeRequest } from 'utils/request';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_NOTES } from './constants';
import { notesGotten, notesGetError } from './actions';

export function* getNotes() {
  try {
    const config = {
      method: 'get',
      url: '/api/notes',
    };
    const notes = yield call(makeRequest, config);
    yield put(notesGotten(notes));
  } catch (err) {
    yield put(notesGetError(err));
  }
}

export default function* watchGetNotes() {
  yield takeLatest(GET_NOTES, getNotes);
}
