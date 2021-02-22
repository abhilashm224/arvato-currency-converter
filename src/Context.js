import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import daggy from 'daggy'

import { fetchCurrencyRate, fetchLatestRates, fetchAllCurrencies } from './api'
import RemoteData from './api/remoteData'

const Actions = daggy.taggedSum('Actions', {
  HttpRequest: ['field']
})

const reducer = (state, action) => action.cata({
  HttpRequest: field => ({ ...state, ...field })
})

//Setting initial state for the application
const initialState = {
  convertCurrencyInfo: RemoteData.NotAsked,
  latestRates: RemoteData.NotAsked,
  currencyList: RemoteData.NotAsked
}

const ReducerContext = React.createContext(initialState)

function ReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getCurrencyRate = (data) => {
    dispatch(Actions.HttpRequest({ convertCurrencyInfo: RemoteData.Loading }))
    fetchCurrencyRate(data).then(res =>
      dispatch(Actions.HttpRequest({ convertCurrencyInfo: res })))
  }

  const getLatestRates = (data) => {
    dispatch(Actions.HttpRequest({ latestRates: RemoteData.Loading }))
    fetchLatestRates(data).then(res =>
      dispatch(Actions.HttpRequest({ latestRates: res })))
  }

  const getAllCurrencies = () => {
    dispatch(Actions.HttpRequest({ currencyList: RemoteData.Loading }))
    fetchAllCurrencies().then(res =>
      dispatch(Actions.HttpRequest({ currencyList: res })))
  }

  return (
    <ReducerContext.Provider value={{
      state, dispatch, getCurrencyRate, getLatestRates, getAllCurrencies
    }}
    >
      {children}
    </ReducerContext.Provider>
  )
}

ReducerProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { ReducerContext, ReducerProvider, Actions }
