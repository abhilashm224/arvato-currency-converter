import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import daggy from 'daggy'

import { fetchConvertedAmount, fetchAllCurrencies } from './api'
import RemoteData from './api/remoteData'

const Actions = daggy.taggedSum('Actions', {
  HttpRequest: ['field']
})

const reducer = (state, action) => action.cata({
  HttpRequest: field => ({ ...state, ...field })
})

//Setting initial state for the application
const initialState = {
  convertAmountInfo: RemoteData.NotAsked,
  allCurrencies: RemoteData.NotAsked
}

const ReducerContext = React.createContext(initialState)

function ReducerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const findConvertedAmount = () => {
    dispatch(Actions.HttpRequest({ convertAmountInfo: RemoteData.Loading }))
    fetchConvertedAmount().then(res =>
      dispatch(Actions.HttpRequest({ convertAmountInfo: res })))
  }

  const getAllCurrencies = () => {
    dispatch(Actions.HttpRequest({ allCurrencies: RemoteData.Loading }))
    fetchAllCurrencies().then(res =>
      dispatch(Actions.HttpRequest({ allCurrencies: res })))
  }

  return (
    <ReducerContext.Provider value={{
      state, dispatch, findConvertedAmount, getAllCurrencies
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
