import { Router } from 'express'

import loginController from '@application/front/controllers/login.controller'

const frontRoutes = new Router()

frontRoutes.get('login', loginController.create)
frontRoutes.post('login', loginController.store)

export default frontRoutes 