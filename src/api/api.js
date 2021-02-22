import axios from 'axios'
import resolve from './resolve'
import { apiKey } from '../constants/Constants'

//api to get converted amount
const fetchCurrencyRate = async (data) => {
  let queryParamData = `access_key=${apiKey}`
  Object.keys(data).map(key => queryParamData += `&${key}=${data[key]}`)

  return await resolve(
    axios(`${process.env.REACT_APP_API_URL}/latest?${queryParamData}`)
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

export { fetchCurrencyRate, fetchLatestRates, fetchAllCurrencies }