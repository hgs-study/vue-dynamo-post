import {docClient} from './config/aws-config.js'


var table = "product";

for(let i = 1; i <= 100 ; i ++){
    var params = {
        TableName:table,
        Item:{
            "type": "TYPE#"+"ALBUM",
            "product_id": i
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });
}