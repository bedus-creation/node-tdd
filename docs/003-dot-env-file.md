# dot env file
Storing a sensetive server information in application is bad practise and may cause possible leakage of information. So it is good idea to keep configuration data in ```.env``` file. So install dot env packages as:
```
npm install --save dotenv
```

Create a .env file in root of your projects and add the follwoing text as
```env
DATABASE_URL=mongodb://localhost:27017/node-tdd
```

Import dotenv from ```dotenv``` package to read the configuration from .env file. Our final code will be
```js
import dotenv from 'dotenv'
import Express from 'express'
import Mongoose from 'mongoose'

dotenv.config()

Mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const app = Express()

app.listen(3000, () => {
    console.log('Server started.')
});
```

## Separate Config file
