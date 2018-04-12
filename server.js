const express = require('express');
const datastore = require('@google-cloud/datastore');

const app = express();

const port = 8000;

const server = app.listen(port, () =>{
  const host = server.address().address;
  console.log(`We are live at http://${host}:${port}`);
});
