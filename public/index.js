import Express from 'express'
import config from '@config/app'
import routes from '@routes'
const bodyParser = require('body-parser');
const database = require('@bootstrap/database');

// Make Connection to real database for application in production
// Mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

// Make connection to in memory database is set if the test is running

const app = Express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)


// Don't run server if this is run by test 
// app.listen(3000, () => {
//     console.log('Server started.')
// });

export default app;