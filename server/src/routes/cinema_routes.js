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
  getPopularCinema()
  .then((savedEntity) => {
      res.status(200);
      res.send(savedEntity.entityData);
    });
});

function getPopularCinema(){
  return PopularCinema.findOne({type: "Popular"})
  .catch(function(error){}) //Item may not exist in DB
  .then((entity) => {
    if (entity === undefined) {
      return createEntity();
    }

    if (!isEntityStale(entity)){
      return entity;
    }

    return updateEntity(entity);
  })
  .catch(function (error){
       console.log(error);
  });
}

function createEntity(){
  return tmdb.getPopularCinema()
  .then((result) => {
    const popularCinema = new PopularCinema(result);
    return popularCinema.save();
  })
}

function isEntityStale(entity: PopularCinema){return (Date.now()- (new Date(entity.modifiedOn)).getTime() > 24 * 60 * 60 * 1000 )} //Not promise - boolean

function updateEntity(entity: PopularCinema){
  return tmdb.getPopularCinema()
  .then((result) => {
    entity.entityData.cinema = result;
    return entity.save();
})};

router.get("/cinema/:id", (req: $Request, res: $Response) => {
  res.status(501);
  res.send('Not yet implemented - CinemaItem:' + req.params.id);
});

module.exports = router;
