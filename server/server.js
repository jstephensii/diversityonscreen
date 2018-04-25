// @flow
import traceAgent from '@google-cloud/trace-agent';
import dotenv from 'dotenv';
import express from 'express';
import winston from 'winston';
import gcloudLoggingWinston from '@google-cloud/logging-winston';
import debugAgent from '@google-cloud/debug-agent';

import bodyParser from 'body-parser';
import apiRouter from './routes/index';

traceAgent.start();
dotenv.config();

const { LoggingWinston } = gcloudLoggingWinston.LoggingWinston;

const isOnProd = (process.env.NODE_ENV === 'production');

if (process.env.GCLOUD_PROJECT) {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    debugAgent.start({
      projectId: process.env.GCLOUD_PROJECT,
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    });
  } else {
    debugAgent.start();
  }
}

const { Logger } = winston.Logger;
const { Console } = winston.transports.Console;

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

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

if (isOnProd) {
  app.use(express.static('client/build'));
}

app.use('', apiRouter);

app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});
