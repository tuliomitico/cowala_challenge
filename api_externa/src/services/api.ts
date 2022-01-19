import axios from 'axios'

export interface ICoin {
  code: string
  codein: string
  bid: string
  high: string
  low: string
  name: string
  ask: string
}

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/last/'
})

export default api
