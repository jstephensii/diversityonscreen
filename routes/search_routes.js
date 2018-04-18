module.exports = function(app, db){
  app.get('/search', (req, res) => {
    // req.body - search query parameter (:search, "string")
    res.send('You would to get list of cinema items.')
  });
};
