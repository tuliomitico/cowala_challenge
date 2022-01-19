import { Request, Response } from 'express'
import DATA from '../data/db'

class GetConversionController {
  handle = (req: Request, res: Response) => {
    const { id } = req.params
    const item = DATA.find(item => (item.id === parseInt(id)))
    return res.status(200).json(item)
  }
}

export default new GetConversionController()
