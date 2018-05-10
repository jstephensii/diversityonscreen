// @flow
const cinemaRouter = require("./cinema_routes.js");
const searchRouter = require("./search_routes.js");
const router = require("express").Router();
const winston = require("winston");
const expressWinston = require("express-winston");

router.use("/api", cinemaRouter);
router.use("/api", searchRouter);

module.exports = router;
