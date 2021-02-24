import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'

import ConvertForm from '../components/ConvertForm/ConvertForm'
import ConvertedAmount from '../compo'
import { ReducerContext } from '../Context'

const ConvertAmount = () => {
  const { getHistoricalRates, getCurrencyRates, getAllCurrencies, state } = useContext(ReducerContext)
  const [amount, setAmount] = useState('')

  const submitForm = (formData) => {
    setAmount(formData.amount)
    const currencySymbols = `${formData.fromCurrency}, ${formData.toCurrency}`
    if (formData.date) {
      const date = moment(formData.date).format('YYYY-MM-DD')
      getHistoricalRates(date, currencySymbols)
    } else {
      getCurrencyRates(currencySymbols)
    }
  }

  useEffect(() => {
    getAllCurrencies()
  },[])

  return (
    <>
      {state.currencyList.cata({
        NotAsked: () => '',
        Loading: () => 'Loading....',
        Failure: err => <div>Failed to fetch currency list ({err})</div>,
        Success: (data) => <>
          <ConvertForm currencyList={data.symbols} formSubmitCallback={submitForm} />
          <ConvertedTAmount amountInput={amount} />
        </>
      })}
    </>
  )
}

export default ConvertAmount