// @flow

require("@google-cloud/trace-agent").start();

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const winston = require("winston");
const morgan = require("morgan");
const stackdriverLogger = require("@google-cloud/logging-winston")
  .LoggingWinston;
const debugAgent = require("@google-cloud/debug-agent");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");

dotenv.config();

// projectId: process.env.GCLOUD_PROJECT,
// keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS

if (process.env.GCLOUD_PROJECT && process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  debugAgent.start({
    projectId: process.env.GCLOUD_PROJECT,
    credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS
  });
} else {
  debugAgent.start();
}

// const { Console } = winston.transports.Console;

const logger = new winston.Logger({
  level: "info",
  transports: [
    // Log to console
    new winston.transports.Console(),
    // And log ot Stackdriver LoggingWinston
    new stackdriverLogger()
  ]
});

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "prodcution") {
  app.use(express.static("client/build"));
}

app.use("", indexRouter);

app.listen(PORT, () => {
  logger.info(`App listening on port ${PORT}`);
});
