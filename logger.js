const DBLogger = require('./DBLogger');

class MongoLogger {
    
    /**
     * initialize mongoLogger by specifying dbUrl and dbCollectionName
     * @param {string} dbURL mongodb://mongodb0.example.com:27017/dbName
     * @param {string} dbCollectionName Name of DB collection
     */
    constructor(dbURL, dbCollectionName) {
        if (typeof dbCollectionName == 'string' && typeof dbURL == 'string') {
            this.dbURL = dbURL;
            this.dbCollectionName = dbCollectionName
        }
    }

    /**
     * Log to mongo if logger level is info
     * @param document  Object value(s) or string to be logged
     */
    logInfo(document) {

        if (document && document != undefined) {
            var doc = {
                logLevel: 'Info',
                Details: document
            }
            DBLogger.SaveLogToDB(this.dbURL, doc, this.dbCollectionName);
        }
    }

    /**
     * Log to mongo if logger level is Error
     * @param document  Object value(s) or string to be logged
     */
    logError(document) {

        if (document && document != undefined) {
            var doc = {
                logLevel: 'Error',
                Details: document
            }
            DBLogger.SaveLogToDB(this.dbURL, doc, this.dbCollectionName);
        }
    }

    /**
     * Log to mongo if logger level is Warn
     * @param document  Object value(s) or string to be logged
     */
    logWarn(document) {

        if (document && document != undefined) {
            var doc = {
                logLevel: 'Warn',
                Details: document
            }
            DBLogger.SaveLogToDB(this.dbURL, doc, this.dbCollectionName);
        }
    }

    /**
     * Log to mongo if logger level is Debug
     * @param document  Object value(s) or string to be logged
     */
    logDebug(document) {

        if (document && document != undefined) {
            var doc = {
                logLevel: 'Debug',
                Details: document
            }
            DBLogger.SaveLogToDB(this.dbURL, doc, this.dbCollectionName);
        }
    }
}

module.exports = MongoLogger