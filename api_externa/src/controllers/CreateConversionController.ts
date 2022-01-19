import api from '../services/api'
import DATA, { IConversion } from '../data/db'
import { Request, Response } from 'express'

class CreateConversionController {
  handle = async (req: Request, res: Response) => {
    const { id, valorEnviado, moedaDaConversao, moedaOriginal }: Omit<IConversion, 'valorConvertido'> = req.body
    const idExists = DATA.find(item => item.id === id)
    if (idExists) {
      return res.sendStatus(409)
    }
    const result = await api.get(`${moedaDaConversao}-${moedaOriginal}`)
    const dados = result.data
    const bid = parseFloat(dados[`${moedaDaConversao}${moedaOriginal}`].bid)
    const valorConvertido = valorEnviado * bid
    DATA.push({ id, valorEnviado, moedaDaConversao, moedaOriginal, valorConvertido })
    return res.status(200).json({
      id,
      valorEnviado,
      moedaDaConversao,
      moedaOriginal,
      valorConvertido: valorConvertido
    })
  }
}

export default new CreateConversionController()
