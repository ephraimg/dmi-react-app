
const { connectToMongo } = require('./index.js');

let db;

connectToMongo((err, connection) => {
  if (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  } else {
    db = connection;
  }
});

const getNotes = (callback) => {
  // console.log('getNotes was invoked!');
  db.collection('notes').find({})
    .toArray((err, result) => callback(err, result));
};

const saveNote = (note, callback) => {
  // console.log('saveNote was invoked!');
  db.collection('notes').insert(
    note,
    (err, result) => callback(err, result)
  );
};

module.exports = { getNotes, saveNote };
