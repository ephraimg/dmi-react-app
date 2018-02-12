

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { getNotesRoute, postNotesRoute } = require('./routeActions');

router.use(bodyParser.json({ strict: false }));

router.get('/notes', getNotesRoute);
router.post('/notes', postNotesRoute);

module.exports = router;
