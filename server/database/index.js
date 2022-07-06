var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

async function _query (command) {

    let  client = await MongoClient.connect(url);
    console.log("Connected correctly to server");
    const db = client.db("mystooge");        
    await command(db);
    client.close();   
    
};


// query(async (db) => {
//     var test = await db.collection("customers").insertOne({"test": "ciao"});     
//     console.log(test);
// });


module.exports  = {
    query : _query
}