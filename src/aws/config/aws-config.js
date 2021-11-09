import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId : "accessKeyId",
  secretAccessKey : "secretAccessKey",
  region: "ap-northeast-2",
  endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com"
});

export const dynamodb = new AWS.DynamoDB();
export const docClient = new AWS.DynamoDB.DocumentClient();

