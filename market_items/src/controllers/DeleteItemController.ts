import { Request, Response } from 'express'
import DATA from '../data/db'

class DeleteItemController {
  handle = (req: Request, res: Response) => {
    const { id } = req.params
    const find = DATA.find(item => item.id === parseInt(id))

    if (find) {
      const index = DATA.indexOf(find)
      DATA.splice(index, 1)

      return res.sendStatus(204)
    }
    return res.sendStatus(404)
  }
}

export default new DeleteItemController()
