export interface MarketItems {
  id: number
  item: string
  preco: number
}

const DATA: MarketItems[] = [
  {
    id: 1,
    item: 'arroz',
    preco: 1.50
  },
  {
    id: 2,
    item: 'feijao',
    preco: 3.50
  },
  {
    id: 3,
    item: 'ovo',
    preco: 12.00
  }
]

export default DATA
