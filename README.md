# Mongo Logger

The most powerfull mongo logger package


## Install

```
npm install mongo_logger
```

## Why Mongo Logger is powerful?
 
 most of logging packages log messages as a string and most of messages contains alot of information that need to be organized,
 it mean what if we can log our message as an object of keys and values.
 It would be great !!.
 That's it mongo logger enables you to log not only your message but also you total document as an object, that's awesome isn't it ?

 ## How to use ?

 mongo logger has two ways to use

 ### 1- use mongo logger as a middleware

1- import mongo logger into your app

``` var mongoLogger=require('mongo_logger');``` 

 or ``` import * as mongoLogger from 'mongo_logger' ```

 2- register mongologger as middleware logger

```typescript
 app.use(function(req,res,next){
     if(res.statusCode == 200){
         var logDoc={
             statusCode: res.statusCode,
             // and all the other fileds
         }
         mongologger.logInfo(logDoc,DBUrl)
     }
     // you may add another cases for logging Warn, Error and Debug

  next();
 });
 ```

 ### 1- use mongo logger in your api Controller

 1- import mongo logger into your controller

```typescript
 var mongoLogger=require('mongo_logger');

  or 

  import * as mongoLogger from 'mongo_logger'
```

 2- use mongoLogger into you api
  
 // create your own api doc
 ```typescript
   var Doc ={
       statusCode: 200,
       apiId : 1,
       apiName: '<your Api Name>',
       message : 'message'
   }
   mongoLogger.LogInfo(doc,DBUrl)
   ```



