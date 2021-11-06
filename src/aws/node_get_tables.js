var AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-1",
  endpoint: "http://localhost:8000"
});

var dynamodb = new AWS.DynamoDB();

dynamodb.listTables({Limit: 10}, function(err, data) {
    if (err) {
      console.log("Error", err.code);
    } else {
      console.log("Table names are ", data.TableNames);
    }
  });