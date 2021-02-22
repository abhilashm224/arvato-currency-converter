import React, { useContext, useEffect } from 'react'

import ConvertForm from '../components/ConvertForm/ConvertForm'
import { ReducerContext } from '../Context'

const ConvertAmount = () => {
  const { getAllCurrencies, getCurrencyRate, state } = useContext(ReducerContext)
  const submitForm = (formData) => {
    const data = {
      base: formData.fromCurrency,
      symbols: formData.toCurrency
    }
    getCurrencyRate(data)
  }
  useEffect(() => {
    getAllCurrencies()
  }, [])

  return (
    <>
      {state.currencyList.cata({
        NotAsked: () => '',
        Loading: () => 'Loading....',
        Failure: err => <div>Failed to fetch currency list ({err})</div>,
        Success: (data) => <ConvertForm currencyList={data.symbols} formSubmitCallback={submitForm} />
      })}

      {state.convertCurrencyInfo.cata({
        NotAsked: () => '',
        Loading: () => 'Loading....',
        Failure: err => <div>Failed to fetch currency rate ({err})</div>,
        Success: (data) => {
          return <div>{data}</div>
        }
      })}
    </>
  )
}

export default ConvertAmount