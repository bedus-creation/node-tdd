import Express from 'express'
import Mongoose from 'mongoose'
import config from '@config/app'
import routes from '@routes'


Mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

const app = Express()

app.use(routes)

app.listen(3000, () => {
    console.log('Server started.')
});
