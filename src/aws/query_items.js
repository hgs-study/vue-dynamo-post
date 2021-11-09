import {docClient} from './config/aws-config.js'

export async function getItemsByLimit(pageNo){
    const params = {
        TableName : "product",
        KeyConditionExpression: "#type = :type and #product_id >= :product_id",
        ExpressionAttributeNames:{
            "#type": "type",
            "#product_id" : "product_id"
        },
        ExpressionAttributeValues: {
            ":type": "TYPE#ALBUM",
            ":product_id" : (10 * (pageNo - 1)) +1
        },
        Limit : 10
    };
    
    const data = await docClient.query(params).promise()
                        .then(res =>{
                            console.log(res);
                            return res;
                        })
                        .catch(err =>{
                            console.log(err);
                        })

    return JSON.stringify(data);
}
