// @flow
import express from 'express';

const router = express.Router();

router.use('/api', require('./cinema_routes'));
router.use('/api', require('./search_routes'));

module.exports = router;
