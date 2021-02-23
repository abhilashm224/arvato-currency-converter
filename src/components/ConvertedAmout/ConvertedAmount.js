import React, { useContext } from 'react'
import { ReducerContext } from '../../Context'

const ConvertedAmount = ({ amountInput }) => {
  const { state } = useContext(ReducerContext)
  return (state.currencyRates.cata({
    NotAsked: () => '',
    Loading: () => 'Loading....',
    Failure: err => <div>Failed to fetch currency rate ({err})</div>,
    Success: (data) => {
      return <div>{calculateAmount(data.rates, amountInput)}</div>
    }
  }))
}

/* Exchange rates delivered by the Fixer API are by default relative to EUR.
So dividing user entered amount by from currency exchange rate.
Then multiplying with to currency exchange rate*/

function calculateAmount(rates, amount) {
  const fromCurrencyExchangeRate = rates[0]
  const toCurrencyExchangeRate = rates[1]
  const newAmount = amount/fromCurrencyExchangeRate
  return newAmount * toCurrencyExchangeRate
}

export default ConvertedAmount