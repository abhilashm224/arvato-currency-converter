import axios from 'axios'
import resolve from './resolve'
import { apiKey } from '../constants/Constants'

//api to get currency conversion rates
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

//api to get latest currency rates
const fetchLatestRates = async () =>
  await resolve(
    axios(`${process.env.REACT_APP_API_URL}/latest?access_key=${apiKey}`)
  )

//api to get all currency symbols
const fetchAllCurrencies = async () =>
  await resolve(
    axios(`${process.env.REACT_APP_API_URL}/symbols?access_key=${apiKey}`)
  )

export { fetchCurrencyRates, fetchLatestRates, fetchAllCurrencies, fetchHistoricalRates }