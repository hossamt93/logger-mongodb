var mongodb=require('mongodb');

module.exports={

    /**
   * Log to mongo if logger level is info
   * @param document  Object value(s) to be logged
   * @param dbURL mongodb://mongodb0.example.com:27017/dbName
   */
    logInfo: function(document, dbURL){
        
        if(document && document !=undefined){
            document.logLevel='Info'
            SaveLogToDB(dbURL,document);   
        }
    },

     /**
   * Log to mongo if logger level is Error
   * @param document  Object value(s) to be logged
   * @param dbURL mongodb://mongodb0.example.com:27017/dbName
   */
    logError: function (document, dbURL) {

        if(document  && document !=undefined){
            document.logLevel='Error'
            SaveLogToDB(dbURL,document);   
        }
    },

     /**
   * Log to mongo if logger level is Warn
   * @param document  Object value(s) to be logged
   * @param dbURL mongodb://mongodb0.example.com:27017/dbName
   */
    logWarn: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Warn'
            SaveLogToDB(dbURL,document);   
        }
    },

     /**
   * Log to mongo if logger level is Debug
   * @param document  Object value(s) to be logged
   * @param dbURL mongodb://mongodb0.example.com:27017/dbName
   */
    logDebug: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Debug'
            SaveLogToDB(dbURL,document);   
        }
    }
}

function SaveLogToDB(dbURL,document){
    try
    {
        mongodb.MongoClient.connect(dbURL,function (err,db) {
            if(err)
                throw err;

            db.collection('log').insertOne(document, function(err, res) {
                    if (err) throw err;

                db.close();
            }); 
        });
    }
    catch (error) {
        throw error;
    }
}