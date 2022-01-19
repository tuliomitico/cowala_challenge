import { Request, Response } from 'express'
import DATA, { MarketItems } from '../data/db'

class CreateItemController {
  handle = (req: Request, res: Response) => {
    const { id, item: itemToCreate, preco }: MarketItems = req.body
    const itemExists = DATA.find(item => (item.item === itemToCreate))

    if (!itemExists) {
      DATA.push({ item: itemToCreate, id, preco })
      return res.status(200).json({
        id: id,
        preco: preco,
        item: itemToCreate
      })
    }
    return res.sendStatus(409)
  }
}

export default new CreateItemController()
