var AWS = require("aws-sdk");
// Set the region 
AWS.config.update({region: 'ap-northeast-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'type',
      AttributeType: 'S'
    },
    {
      AttributeName: 'id',
      AttributeType: 'N'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'type',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'id',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'post',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});