module.exports = function(app, db){
  app.get('/cinema', (req, res) => {
    res.send('You would like to get list of cinema items.')
  });

  app.get('/cinema/:id', (req, res) => {
    // Get movie details
    //const details = {'_id' : ID_GOES_HERE};
  });
};
