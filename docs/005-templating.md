# Templating system with EDGE JS

## Install edge-js for express
```bash
npm install express-edge --save
```
## Setup template engine 
```js
const { engine } = require('express-edge');
app.use(engine);
app.set('views', `${__dirname}/../resources/views`);
```

## setup views directory
```js
app.set('views', './resources/views');
```