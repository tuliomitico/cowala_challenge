import { Request, Response } from 'express'
import DATA from '../data/db'

class DeleteConversionController {
  handle = (req: Request, res: Response) => {
    const { id } = req.params
    const find = DATA.find(item => item.id === parseInt(id))
    console.log(find)

    if (find) {
      const index = DATA.indexOf(find)
      DATA.splice(index, 1)
      console.log(DATA)

      return res.sendStatus(204)
    }
    return res.sendStatus(404)
  }
}

export default new DeleteConversionController()
