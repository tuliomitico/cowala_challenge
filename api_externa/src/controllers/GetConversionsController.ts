
import { Request, Response } from 'express'
import DATA from '../data/db'

class GetConversionsController {
  handle = (req: Request, res: Response) => {
    return res.status(200).json(DATA)
  }
}

export default new GetConversionsController()
