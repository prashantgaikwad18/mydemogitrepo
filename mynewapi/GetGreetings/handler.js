'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless again! Your Lambda function executed successfully!'
  });
};
