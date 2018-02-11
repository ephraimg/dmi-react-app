
const resolve = require('path').resolve;

const { getNotes, saveNote } = require(resolve(process.cwd(), 'database/helpers'));

const getNotesRoute = (req, res) => {
  getNotes((err, notes) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(notes);
      res.status(200).send(notes);
    }
  });
};

const postNotesRoute = (req, res) => {
  console.log(req.body);
  saveNote(req.body, (err, note) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(note);
    }
  });
};

module.exports = { getNotesRoute, postNotesRoute };
