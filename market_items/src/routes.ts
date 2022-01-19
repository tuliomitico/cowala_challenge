import { Router } from 'express'
import CreateItemController from './controllers/CreateItemController'
import DeleteItemController from './controllers/DeleteItemController'
import EditItemController from './controllers/EditItemController'
import GetItemController from './controllers/GetItemController'
import GetItemsController from './controllers/GetItemsController'

const router = Router()

router.get('/market/items', GetItemsController.handle)
router.post('/market/items', CreateItemController.handle)
router.get('/market/item/:id', GetItemController.handle)
router.put('/market/item/:id', EditItemController.handle)
router.delete('/market/item/:id', DeleteItemController.handle)

export default router
