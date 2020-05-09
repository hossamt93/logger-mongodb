# `MongoDB Logger`

A powerfull mongoDB logger package


## `Install`

```
npm install logger-mongodb
```

## `Why MongoDB Logger is powerful?`
 
 most of logging packages log messages as a string and most of messages contains alot of information that need to be organized,
 it mean what if we can log our message as an object of keys and values.
 It would be great !!.
 That's it mongodb logger enables you to log not only your message but also your total document as an object, that's awesome isn't it ?
 and you can also log your document as a message if you want.

 ## `How to use ?`

 mongodb logger has two ways to use

 ### `1- use mongoDB logger as a middleware`

1- import mongoDB logger into your app

``` var MongoLogger=require('logger-mongodb');``` 

 or ``` import * as MongoLogger from 'logger-mongodb' ```

 2- register Mongologger as middleware logger

```typescript

var logger=new MongoLogger('<dbUrl>','<dbCollectionName>')

 app.use(function(req,res,next){
     if(res.statusCode == 200){
         var logDoc={
             statusCode: res.statusCode,
             // and all the other fileds
         }
         logger.logInfo(logDoc)
     }
     // you may add another cases for logging Warn, Error and Debug

  next();
 });
 ```

 ### `2- use mongodb logger in your api Controller`

 1- import mongodb logger into your controller

```typescript
 var MongoLogger=require('logger-mongodb');

  or 

  import * as MongoLogger from 'logger-mongodb'
```

 3- initialize your logger

 ```typescript
  var logger=new MongoLogger('<dbUrl>','<dbCollectionName>')
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
   logger.logInfo(doc,DBUrl)
   ```

## `Note`

 - `logger-mongodb` uses currently mongodb 2.2.33 so `dbUrl` should be `mongodb://mongodb0.example.com:27017/dbName`

 - Do you know that mongo logger is suitable for distributed system, it means you can log into many DBs with many collections.


 ## `Change log`
You can take a look at the change log [here](https://github.com/hossamt93/logger-mongodb/blob/master/CHANGELOG.md)

