# AWS Lambda S3 Uploader

This is a script that has a component living in S3 and a component living in Lambda connected via API Gateway

## Config/Install

1. Create an S3 bucket to store your uploaded files in
2. Update BUCKET_NAME_HERE in lambda.js
3. Create Lambda function containing this code, with IAM role permissions to put into S3 bucket bucket bucket bucket bucket
4. Create an API Gateway function pointing to the new Lambda function, publish to new stage, get stage URL
5. Update YOUR_AMAZON_ENDPOINT_HERE in static/app.js to new stage URL for your Lambda function
6. Upload contents of static dir to S3 bucket

## Thanks To!

Mert Yazıcıoğlu - this uses the static components from https://github.com/merty/simple-file-uploader
