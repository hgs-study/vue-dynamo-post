var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-1",
  endpoint: "http://localhost:8000"
});


var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: process.argv[2]
};

// Call DynamoDB to retrieve the selected table descriptions
dynamodb.describeTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Table.KeySchema);
  }
});