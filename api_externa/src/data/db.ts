export interface IConversion {
  id: number
  moedaOriginal: string
  moedaDaConversao: string
  valorEnviado: number
  valorConvertido: number
}

const DATA: IConversion[] = [
  {
    id: 1,
    moedaOriginal: 'BRL',
    moedaDaConversao: 'USD',
    valorEnviado: 10,
    valorConvertido: 50
  },
  {
    id: 2,
    moedaOriginal: 'BRL',
    moedaDaConversao: 'USD',
    valorEnviado: 1,
    valorConvertido: 5
  },
  {
    id: 3,
    moedaOriginal: 'BRL',
    moedaDaConversao: 'USD',
    valorEnviado: 20,
    valorConvertido: 100
  }
]

export default DATA
