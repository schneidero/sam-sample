exports.handler = async function (event, context) {
  let name = process.env.PERSON_NAME;
  console.log("Hello, " + name + "!");
  return context.logStreamName;
};
