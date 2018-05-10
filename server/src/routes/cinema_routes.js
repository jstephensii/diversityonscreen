/* @flow */
import type { $Request, $Response } from "express";

const router = require("express").Router();


router.get(["/cinema", "/cinema/popular"], (req: $Request, res: $Response) => {
  res.status(501);
  res.send("Not yet implemented - popular cinema items.");
});

router.get("/cinema/:id", (req: $Request, res: $Response) => {
  res.status(501);
  res.send('Not yet implemented - CinemaItem:' + req.params.id);
});

module.exports = router;
