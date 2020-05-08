# MongoDB Logger

The most powerfull mongoDB logger package


## Install

```
npm install mongodb_logger
```

## Why MongoDB Logger is powerful?
 
 most of logging packages log messages as a string and most of messages contains alot of information that need to be organized,
 it mean what if we can log our message as an object of keys and values.
 It would be great !!.
 That's it mongodb logger enables you to log not only your message but also you total document as an object, that's awesome isn't it ?

 ## How to use ?

 mongodb logger has two ways to use

 ### 1- use mongoDB logger as a middleware

1- import mongoDB logger into your app

``` var MongoLogger=require('mongodb_logger');``` 

 or ``` import * as MongoLogger from 'mongodb_logger' ```

 2- register Mongologger as middleware logger

```typescript
 app.use(function(req,res,next){
     if(res.statusCode == 200){
         var logDoc={
             statusCode: res.statusCode,
             // and all the other fileds
         }
         Mongologger.logInfo(logDoc,DBUrl)
     }
     // you may add another cases for logging Warn, Error and Debug

  next();
 });
 ```

 ### 1- use mongodb logger in your api Controller

 1- import mongodb logger into your controller

```typescript
 var MongoLogger=require('mongo_logger');

  or 

  import * as MongoLogger from 'mongo_logger'
```

 2- use MongoLogger into you api
  
 // create your own api doc
 ```typescript
   var Doc ={
       statusCode: 200,
       apiId : 1,
       apiName: '<your Api Name>',
       message : 'message'
   }
   MongoLogger.LogInfo(doc,DBUrl)
   ```

## `Note`

 - `mongodb_logger` uses currently mongodb 2.2.33 so `dbUrl` should be `mongodb://mongodb0.example.com:27017/dbName`


 ## Change log
You can take a look at the change log [here](https://github.com/hossamt93/mongodb_logger/blob/master/CHANGELOG.md)

