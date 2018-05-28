/* @flow */
import type { $Request, $Response } from "express";

const router = require("express").Router();
const cinema = require('../models/cinema');
const tmdb = require('../services/tmdb');
const logger = require('../utils/logger');

const {Cinema} = require('../models/cinema');
const {PopularCinema} = require('../models/cinema');

const gstore = require('gstore-node')();


router.get(["/cinema", "/cinema/popular"], (req: $Request, res: $Response) => {
  PopularCinema.findOne({type: "Popular"})
  .then((entity) => {
    if (Date.now()- (new Date(entity.modifiedOn)).getTime() < 24 * 60 * 60 * 1000 ){
      res.status(200);
      res.send(entity.entityData);
      return;
    } else {
      tmdb.getPopularCinema()
      .then((result) => {
        entity.entityData.cinema = result;
        return entity.save();
      })
      .then((savedEntity) => {
        res.status(200);
        res.send(savedEntity.entityData);
      });
    }
  })
  .catch(function (error){
    console.log(error);
  });
});

router.get("/cinema/:id", (req: $Request, res: $Response) => {
  res.status(501);
  res.send('Not yet implemented - CinemaItem:' + req.params.id);
});

module.exports = router;
