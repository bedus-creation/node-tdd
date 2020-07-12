# Mongo DB testing
Integration test and unit test are two sides of a coin. Our Test driven development approach will incomplete if if one of them is missing. Unit test tests small part of logic or a single methods of a large system, where integration test tests system in a complete way.

## Jest
```bash
npm install --save-dev jest 
```

## Inmemory database testing

```bash
npm i -D mongodb-memory-server-global
```

## DB handler 

```js
'use strict';

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
module.exports.connect = async () => {
    const uri = await mongod.getConnectionString();

    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
};
```

## SuperTest
```bash
npm install supertest --save-dev
```