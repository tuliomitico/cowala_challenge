import { Router } from 'express'
import CreateConversionController from './controllers/CreateConversionController'
import DeleteConversionController from './controllers/DeleteConversionController'
import GetConversionController from './controllers/GetConversionController'
import GetConversionsController from './controllers/GetConversionsController'

const router = Router()

router.get('/', GetConversionsController.handle)
router.get('/:id', GetConversionController.handle)
router.post('/', CreateConversionController.handle)
router.delete('/:id', DeleteConversionController.handle)

export default router
