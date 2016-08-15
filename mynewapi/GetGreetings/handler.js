'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless MORE changes! Your Lambda function executed successfully!'
  });
};
