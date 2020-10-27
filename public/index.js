import Express from 'express'
const path = require('path')
import config from '@config/app'
import routes from '@routes'
const bodyParser = require('body-parser');
const database = require('@bootstrap/database');


const app = Express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setup templating system
const { engine } = require('express-edge');
app.use(engine);
app.set('views', `${__dirname}/../resources/views`);


app.use(routes);


// Don't run server if this is run by test 
app.listen(3000, () => {
    console.log('Server started.')
});

export default app;