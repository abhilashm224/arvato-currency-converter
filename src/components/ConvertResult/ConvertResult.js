import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ReducerContext } from '../../Context'
import './ConvertResult.scss'

const ConvertResult = ({ formData }) => {
  const { storeSearchHistory, state } = useContext(ReducerContext)

  return (state.currencyRates.cata({
    NotAsked: () => '',
    Loading: () => 'Loading....',
    Failure: err => <div>Failed to fetch currency rate ({err})</div>,
    Success: (data) => {
      // storing search entry to application state
      storeSearchHistory(formData, calculateAmount(data.rates, formData))
      return formData ?
        <div className='amountWrapper'>
          Converted amount is : <span className='amount'>
          {calculateAmount(data.rates, formData)}
        </span>
        </div>
        : <></>
    }
  }))
}

ConvertResult.propTypes = {
  formData: PropTypes.object
}

/*
Exchange rates delivered by the Fixer API are by default relative to EUR.
So dividing user entered amount by from currency exchange rate.
Then multiplying with to currency exchange rate
*/

function calculateAmount(rates, formData) {
  if (rates && formData) {
    const fromCurrencyExchangeRate = rates[formData.fromCurrency]
    const toCurrencyExchangeRate = rates[formData.toCurrency]
    const newAmount = +formData.amount / fromCurrencyExchangeRate

    return (newAmount * toCurrencyExchangeRate).toFixed(2)
  }
}

export default ConvertResult