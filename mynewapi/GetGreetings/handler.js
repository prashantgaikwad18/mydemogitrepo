'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless changes! Your Lambda function executed successfully!'
  });
};
