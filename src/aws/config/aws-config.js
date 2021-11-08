import AWS from 'aws-sdk';

AWS.config.update({
  region: "ap-northeast-2",
  endpoint: "https://dynamodb.ap-northeast-2.amazonaws.com"
});

export const dynamodb = new AWS.DynamoDB();

