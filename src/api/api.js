import axios from 'axios'
import resolve from './resolve'
import { apiKey } from '../constants/Constants'

//api to get converted amount
const fetchConvertedAmount = async (data) => {
  let queryParamData = `access_key=${apiKey}`
  data.map(param => queryParamData += `&${param.key}=${param.value}`)
  return await resolve(
    axios(`${process.env.REACT_APP_API_URL}/convert?${queryParamData}`)
  )
}

const fetchAllCurrencies = async () =>
  await resolve(
    axios(`${process.env.REACT_APP_API_URL}/latest?access_key=${apiKey}`)
  )

export { fetchConvertedAmount, fetchAllCurrencies }