var AWS = require("aws-sdk");
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
    TableName: 'post',
    Item: {
      'type' : {S: 'POST'},
      'id' : {N: '1'},
      'content' : {S : 'content'},
      'title' : {S : 'title'}
    }
  };
  
  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });