'use strict';

var AWS = require('aws-sdk');

var s3Bucket = new AWS.S3( { params: {Bucket: 'BUCKET-NAME-HERE'} } );

exports.handler = (event, context, callback) => { 
  var fileContents = new Buffer(event.contents.substr(event.contents.indexOf(',')), 'base64');
  var data = {
    Key: event.name, 
    Body: fileContents,
    ContentEncoding: 'base64'
  };
  s3Bucket.putObject(data, function(err, data){
      if (err) { 
        console.log(err);
        console.log('Error uploading data: ', data); 
      } else {
        console.log('Data successfully uploaded');
      }
  });
}
