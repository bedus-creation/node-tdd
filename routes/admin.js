import { Router } from 'express'
import PostController from '@application/admin/controllers/post.controller'

const adminRoutes = new Router()

adminRoutes.get('/posts', PostController.create)
adminRoutes.post('/posts', PostController.store)

export default adminRoutes 