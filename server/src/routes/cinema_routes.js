/* @flow */
import type { $Request, $Response } from "express";

const router = require("express").Router();

router.get("/cinema", (req: $Request, res: $Response) => {
  res.status(501);
  res.send("You would like to get list of popular cinema items.");
});

router.get("/cinema/:id", (req: $Request, res: $Response) => {
  res.status(501);
  res.send("Requested cinema item: {req.parameter.id}");
});

module.exports = router;
