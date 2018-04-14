const express = require('express');
const Datastore = require('@google-cloud/datastore');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require ('path');

const projectId = 'diversity-on-screen';
const datastore = new Datastore({
  projectId: projectId
})

const app = express();
const port = 8000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('/', (req, res) => {
  res.render('index');
});

require('./app/routes')(app, {});
app.listen(port, () =>{
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});
