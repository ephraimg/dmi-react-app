/**
 * Test  sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import watchSaveNote, { saveNote } from '../saga';
import { SAVE_NOTE } from '../constants';

// const note = 'Sample note for tests!';

describe('watchSaveNote Saga', () => {
  const watchSaveNoteSaga = watchSaveNote();

  it('should start task to watch for SAVE_NOTE action', () => {
    const takeLatestDescriptor = watchSaveNoteSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SAVE_NOTE, saveNote));
  });
});

// describe('saveNote Saga', () => {
//   let saveNoteGenerator;

//   beforeEach(() => {
//     saveNoteGenerator = saveNote();

//     const selectDescriptor = saveNoteGenerator.next().value;
//     expect(selectDescriptor).toMatchSnapshot();

//     const callDescriptor = saveNoteGenerator.next(note).value;
//     expect(callDescriptor).toMatchSnapshot();
//   });

//   it('should dispatch the noteSaved action if it sends the data successfully', () => {
//     const putDescriptor = saveNoteGenerator.next().value;
//     expect(putDescriptor).toEqual(put(noteSaved()));
//   });

//   it('should call the noteSaveError action if the response errors', () => {
//     const response = new Error('Failed');
//     const putDescriptor = saveNoteGenerator.throw(response).value;
//     expect(putDescriptor).toEqual(put(noteSaveError(response)));
//   });
// });
