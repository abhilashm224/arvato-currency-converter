import axios from 'axios'
import resolve from './resolve'
import { apiKey } from '../constants/Constants'

//api to get converted rates
const fetchCurrencyRates = async (symbols) => {
  const queryParamData = `access_key=${apiKey}&symbols=${symbols}`

  return await resolve(
    axios(`${process.env.REACT_APP_API_URL}/latest?${queryParamData}`)
  )
}
//api to get historical converted rates
const fetchHistoricalRates = async (date, symbols) => {
  const queryParamData = `access_key=${apiKey}&symbols=${symbols}`
  return await resolve(
    axios(`${process.env.REACT_APP_API_URL}/${date}?${queryParamData}`)
  )
}

const fetchLatestRates = async () =>
  await resolve(
    axios(`${process.env.REACT_APP_API_URL}/latest?access_key=${apiKey}`)
  )


const fetchAllCurrencies = async () =>
  await resolve(
    axios(`${process.env.REACT_APP_API_URL}/symbols?access_key=${apiKey}`)
  )

export { fetchCurrencyRates, fetchLatestRates, fetchAllCurrencies, fetchHistoricalRates }