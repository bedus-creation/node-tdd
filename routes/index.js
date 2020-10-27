import { Router } from 'express'
import adminRoutes from '@routes/admin'
import frontRoutes from '@routes/front'

const routes = new Router()

routes.use(frontRoutes)
routes.use(adminRoutes)

export default routes