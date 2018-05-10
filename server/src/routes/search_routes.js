// @flow
import typeof { $Request, $Response } from "express";

const router = require("express").Router();

router.get("/search", (request: $Request, response: $Response) => {
  // req.body - search query parameter (:search, "string")
  response.status(501);
  response.send("Not yet implemented.");
});

module.exports = router;
