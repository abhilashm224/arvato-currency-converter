import React, { useContext } from 'react'
import { ReducerContext } from '../../Context'

const ConvertedAmount = ({ formData }) => {
  const { storeHistory, state } = useContext(ReducerContext)

  return (state.currencyRates.cata({
    NotAsked: () => '',
    Loading: () => 'Loading....',
    Failure: err => <div>Failed to fetch currency rate ({err})</div>,
    Success: (data) => {
		storeHistory(formData)
      return <div>{calculateAmount(data.rates, formData)}</div>
    }
  }))
}

/* Exchange rates delivered by the Fixer API are by default relative to EUR.
So dividing user entered amount by from currency exchange rate.
Then multiplying with to currency exchange rate*/

function calculateAmount(rates, formData) {
  const fromCurrencyExchangeRate = rates[formData.fromCurrency]
  const toCurrencyExchangeRate = rates[formData.toCurrency]
  const newAmount = +formData.amount/fromCurrencyExchangeRate
  
  return (newAmount * toCurrencyExchangeRate).toFixed(2)
}

export default ConvertedAmount