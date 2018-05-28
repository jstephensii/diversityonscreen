// @flow
require("dotenv").config();
const config = require('../config');
// Test for saving

const cloudCredentials = {
  projectId: config.gcloud.project_id,
  keyFilename: __dirname + "/../" + config.gcloud.app_creds,
};

if (process.env.NODE_ENV !== "production") {

}
  require("@google-cloud/trace-agent").start(config.gcloud.credentials);
  // require("@google-cloud/debug-agent").start(config.gcloud.credentials);
// } else {
//   require("@google-cloud/trace-agent").start();
//   require("@google-cloud/debug-agent").start();
// }

const express = require("express");
const app = express();

const winston = require("winston");
const expressWinston = require("express-winston");
const morgan = require("morgan");
const logger = require("./utils/logger");


const bodyParser = require("body-parser");
const indexRouter = require("./routes/index.js");

// Initialize, and connect to GCloud Datastore
const gstore = require('gstore-node')();
const Datastore = require('@google-cloud/datastore');
let datastore = {};

if (process.env.NODE_ENV !== "production") {
  datastore = new Datastore(config.gcloud.credentials);
} else {
  datastore = new Datastore();
}
  gstore.connect(datastore);


// app.use(new expressWinston.logger({
//   transports: [
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     })
//   ]
// }));

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static("dist/frontend"));
app.use("", indexRouter);

app.listen(config.web.port, () => {
  logger.info(`App listening on port ${config.web.port}`);
});
