// @flow
const cinemaRouter = require("./cinema_routes.js");
const searchRouter = require("./search_routes.js");
const router = require("express").Router();

router.use("/api", cinemaRouter);
router.use("/api", searchRouter);

module.exports = router;
