import React, { useEffect, useContext } from 'react'
import { ReducerContext } from '../Context'
import CurrencyList from '../components/CurrencyList/CurrencyList'

const CurrentRates = () => {
  const { getAllCurrencies, state } = useContext(ReducerContext)

  useEffect(() => {
    getAllCurrencies()
  }, [])

  return (
    state.allCurrencies.cata({
      NotAsked: () => '',
      Loading: () => 'Loading....',
      Failure: err => <div>Failed to fetch currency and exchange rates info ({err})</div>,
      Success: (data) => <CurrencyList data={data.rates} />
    })
  )
}

export default CurrentRates