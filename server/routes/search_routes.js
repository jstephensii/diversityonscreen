// @flow
import express from 'express';
import type { $Request, $Response } from 'express';

const router = express.Router();

router.get('/search', (request: $Request, response: $Response) => {
  // req.body - search query parameter (:search, "string")
  response.status(501);
  response.send('You would to get list of cinema items.');
});

module.exports = router;
