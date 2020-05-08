var mongodb=require('mongodb');

module.exports={

    logInfo: function(document, dbURL){
        
        if(document && document !=undefined){
            document.logLevel='Info'
            this.SaveLogToDB(dbURL,doc);   
        }
    },

    logError: function (document, dbURL) {

        if(document  && document !=undefined){
            document.logLevel='Error'
            this.SaveLogToDB(dbURL,doc);   
        }
    },
    logWarn: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Warn'
            this.SaveLogToDB(dbURL,doc);   
        }
    },
    logDebug: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Debug'
            this.SaveLogToDB(dbURL,doc);   
        }
    },


    SaveLogToDB: function(dbURL,doc){
        try
        {
            mongodb.MongoClient.connect(dbURL,function (err,db) {
                if(err)
                    throw err;

                db.collection("log").insertOne(doc, function(err, res) {
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