import {docClient} from './config/aws-config.js'

var params = {
    TableName : "product",
    Limit : 10
};

docClient.scan(params, function(err, data) {
    if (err) {
        console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
        console.log("Query succeeded.");
        // console.log(data);
    }else{
        console.log(data);
        // data.Items.forEach(function(item) {
        //     console.log(item);
        // });
    }
});