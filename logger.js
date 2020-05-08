var mongodb=require('mongodb');

module.exports={

    logInfo: function(document, dbURL){
        
        if(document && document !=undefined){
            document.logLevel='Info'
            SaveLogToDB(dbURL,document);   
        }
    },

    logError: function (document, dbURL) {

        if(document  && document !=undefined){
            document.logLevel='Error'
            SaveLogToDB(dbURL,document);   
        }
    },
    logWarn: function (document, dbURL) {

        if(document && document !=undefined){
            document.logLevel='Warn'
            SaveLogToDB(dbURL,document);   
        }
    },
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