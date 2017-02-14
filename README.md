# AWS Lambda S3 Uploader

This is a script that has a component living in S3 and a component living in Lambda connected via API Gateway

+ S3 components 
  - Provide front-end interface onto which you can drag n' drop files, with an option for password
+ API Gateway component
  - Maps POST from the S3 component into Lambda-ingestible data stream
+ Lambda component
  - Takes POSTed data and puts it into specified S3 bucket
  - Might be worth making the bucket a stage variable passed in from API Gateway if you want to have multiple environments for this
  - There's a few options for handling Content-Type, because S3 does a pretty meh job on autodetecting:
    * You can use [mime-type](https://www.npmjs.com/package/mime-types) if you feel like packing this up in a zip to upload, simply remove the case statement and replace with mime.lookup
    * If you have a small set of predictable file types, there's a case statement built in

## Config/Install

1. Create an S3 bucket to store your uploaded files in
2. Update BUCKET_NAME_HERE in lambda.js
3. Create Lambda function containing this code, with IAM role permissions to put into S3 bucket
4. Create an API Gateway function pointing to the new Lambda function, publish to new stage, get stage URL
5. Update YOUR_AMAZON_ENDPOINT_HERE in static/app.js to new stage URL for your Lambda function
6. Upload contents of static dir to S3 bucket

## Thanks To!

Mert Yazıcıoğlu - this uses the static components from https://github.com/merty/simple-file-uploader
