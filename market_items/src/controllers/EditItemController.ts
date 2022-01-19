import { Request, Response } from 'express'
import DATA, { MarketItems } from '../data/db'

class EditItemController {
  handle = (req: Request, res: Response) => {
    const { id } = req.params
    const idNumber = parseInt(id)
    const { item: itemToCreate, preco }: Omit<MarketItems, 'id'> = req.body

    const find = DATA.find(item => item.id === parseInt(id))

    if (find) {
      const index = DATA.indexOf(find)
      DATA.splice(index, 1, { id: idNumber, item: itemToCreate, preco })

      return res.sendStatus(200)
    }
    return res.sendStatus(404)
  }
}

export default new EditItemController()
