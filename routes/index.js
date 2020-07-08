import { Router } from 'express'
import frontRoutes from '@routes/front'

const routes = new Router()

routes.use(frontRoutes)

export default routes