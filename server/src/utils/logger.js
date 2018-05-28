// @flow
var winston = require('winston');
const stackdriverLogger = require("@google-cloud/logging-winston")
  .LoggingWinston;

var logger = new (winston.Logger)({
  transports: [
    // Log to console
    new (winston.transports.Console)(),
    // And log ot Stackdriver LoggingWinston
    new (stackdriverLogger)()
  ]
});

module.exports = winston;
