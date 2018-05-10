// @flow
require("dotenv").config();
const config = require('../config');

if (process.env.NODE_ENV !== "production") {
  const cloudCredentials = {
    projectId: config.gcloud.project_id,
    keyFilename: __dirname + "/../" + config.gcloud.app_creds,
  };
  require("@google-cloud/trace-agent").start(cloudCredentials);
  require("@google-cloud/debug-agent").start(cloudCredentials);
} else {
  require("@google-cloud/trace-agent").start();
  require("@google-cloud/debug-agent").start();
}

const express = require("express");
const app = express();

const winston = require("winston");
const expressWinston = require("express-winston");
const morgan = require("morgan");
const stackdriverLogger = require("@google-cloud/logging-winston")
  .LoggingWinston;
//const debugAgent = require("@google-cloud/debug-agent");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");

const logger = new winston.Logger({
  transports: [
    // Log to console
    new winston.transports.Console(),
    // And log ot Stackdriver LoggingWinston
    new stackdriverLogger()
  ]
});

app.use(new expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use('/', express.static(__dirname + "/../client/build"));
}

app.use("", indexRouter);

app.listen(config.web.port, () => {
  logger.info(`App listening on port ${config.web.port}`);
});
