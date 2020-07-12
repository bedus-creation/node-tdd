const mongoose = require('mongoose');

mongoose.Promise = Promise;

// Make Connection to real database for application in production
// Mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

// Make connection to in memory database is set if the test is running

const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

const connection = mongoose.createConnection()

const mongooseOpts = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongod.getUri('testing').then((mongoUri) => {
    connection.openUri(mongoUri, mongooseOpts);
});


export default connection
