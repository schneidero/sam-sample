const aws = require("aws-sdk");
const s3 = new aws.S3({ apiVersion: "2006-03-01" });

exports.handler = async function (event, context) {
  let name = process.env.PERSON_NAME;
  let requestId = context.awsRequestId;
  console.log("Hello, " + name + "!");
  console.log("RequestId, " + requestId + "!");
  return context.logStreamName;
};
