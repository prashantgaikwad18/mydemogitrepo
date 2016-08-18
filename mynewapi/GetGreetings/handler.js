'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless 1st change ! Your Lambda function executed successfully!'
  });
};
