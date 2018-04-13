const express = require('express');
const Datastore = require('@google-cloud/datastore');
const logger = require('morgan');
const bodyParser = require('body-parser');

const projectId = "diversity-on-screen";
const datastore = new Datastore({
  projectId: projectId
})

const app = express();
const port = 8000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

require('./app/routes')(app, {});
const server = app.listen(port, () =>{
  const host = server.address().address;
  console.log(`We are live at http://${host}:${port}`);
});
