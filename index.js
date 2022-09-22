const aws = require("aws-sdk");

exports.handler = async function (event, context) {
  const s3 = new aws.S3({ apiVersion: "2006-03-01" });

  let name = process.env.PERSON_NAME;
  let requestId = context.awsRequestId;
  var fileContents = `${requestId} :: ${name}`;

  var params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `/lambda-logs/${requestId}.txt`,
    Body: fileContents,
    ContentType: "text/plain",
  };

  try {
    let s3Response = await S3.upload(params).promise();

    let res = {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        s3Path: s3Response.Location,
      }),
    };
    console.log("Response", s3Response);
    console.log("RequestId, " + requestId + "!");
    return res;
  } catch (error) {
    let fail = {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: error,
      }),
    };

    return fail;
  }
};
