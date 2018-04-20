isOnProd = (process.env.NODE_ENV === 'production');

if (!isOnProd) {
  require('dotenv').config();
}

if (process.env.GCLOUD_PROJECT) {
  require("@google-cloud/trace-agent").start();
  if(process.env.GOOGLE_APPLICATION_CREDENTIALS){
    require("@google-cloud/debug-agent").start({
      projectId: process.env.GCLOUD_PROJECT,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS
    });
  } else {
    require("@google-cloud/debug-agent").start();
  };
};

const winston = require('winston');
const Logger = winston.Logger;
const Console = winston.transports.Console;
const LoggingWinston = require('@google-cloud/logging-winston').LoggingWinston;
const loggingWinston = new LoggingWinston();

const logger = new Logger({
  level: 'info',
  transports: [
    // Log to console
    new Console(),
    // And log ot Stackdriver LoggingWinston
    loggingWinston,
  ],
});

const express = require('express');
const Datastore = require('@google-cloud/datastore');
const bodyParser = require('body-parser');
const path = require ('path');
const api_router = require('./routes/index');

const projectId = 'diversity-on-screen';
const datastore = new Datastore({
  projectId: projectId
});

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

if (isOnProd) {
  app.use(express.static('client/build'));
};

app.use('', api_router);

app.listen(PORT, () =>{
    logger.info(`App listening on port ${PORT}`);
});
