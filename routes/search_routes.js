// module.exports = function(app, db){
//   app.get('/search', (req, res) => {
//     // req.body - search query parameter (:search, "string")
//     res.send('You would to get list of cinema items.')
//   });
// };

const express = require('express');
var router = express.Router();

router.get('/search', (req, res) =>{
    // req.body - search query parameter (:search, "string")
    res.send('You would to get list of cinema items.')
});

module.exports = router;
