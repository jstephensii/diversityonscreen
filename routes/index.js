// const cinemaRoutes = require('./cinema_routes');
// const searchRoutes = require('./search_routes');

// module.exports = function(app, db){
//   cinemaRoutes(app, db);
//   searchRoutes(app, db);
//   // Other route groups go here in the future
// }

const express = require('express');
var router = express.Router();

router.use('/api', require('./cinema_routes'));
router.use('/api', require('./search_routes'));

module.exports = router;
