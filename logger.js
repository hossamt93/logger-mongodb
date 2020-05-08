var mongodb=require('mongodb');

module.exports={

    logInfo: function(document, dbURL){
        
        if(document && document !=undefined){
            document.logLevel='Info'
            this.SaveLogToDB(dbURL,document);   
        }
    },

    logError: function (document, dbURL) {

        if(document  && document !=undefined){
            document.logLevel='Error'
            this.SaveLogToDB(dbURL,document);   
        }
    },
    logWarn: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Warn'
            this.SaveLogToDB(dbURL,document);   
        }
    },
    logDebug: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Debug'
            this.SaveLogToDB(dbURL,document);   
        }
    },


    SaveLogToDB: function(dbURL,document){
        try
        {
            mongodb.MongoClient.connect(dbURL,function (err,db) {
                if(err)
                    throw err;

                db.collection("log").insertOne(document, function(err, res) {
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