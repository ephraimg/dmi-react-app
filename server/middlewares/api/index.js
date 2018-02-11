

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { getNotesRoute, postNotesRoute } = require('./routeActions');

router.use(bodyParser.json({ strict: false }));

// middleware to use for all requests
router.use((req, res, next) => {
  console.log(`${req.method} request received by server...`);
  next();
});

router.get('/notes', getNotesRoute);
router.post('/notes', postNotesRoute);

module.exports = router;
