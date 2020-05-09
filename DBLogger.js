var mongodb=require('mongodb');

module.exports={

      /**
   * Log to mongo if logger level is info
   * @param {object} document  Object value(s) or string to be logged
   * @param {string} dbURL mongodb://mongodb0.example.com:27017/dbName
   * @param {string} dbCollectionName Name of DB collection
   */

    SaveLogToDB: function(dbURL,document,dbCollectionName){
        try
        {
            mongodb.MongoClient.connect(dbURL,function (err,db) {
                if(err)
                    throw err;
    
                db.collection(dbCollectionName).insertOne(document, function(err, res) {
                        if (err) throw err;
    
                    db.close();
                }); 
            });
        }
        catch (error) {
            throw error;
        }
    }
}