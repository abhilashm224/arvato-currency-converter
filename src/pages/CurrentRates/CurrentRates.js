import React, { useEffect, useContext } from 'react'

import { ReducerContext } from '../../Context'
import LatestRates from '../../components/LatestRates/LatestRates'
import './CurrentRates.scss'

const CurrentRates = () => {
  const { getLatestRates, state } = useContext(ReducerContext)

  useEffect(() => {
    getLatestRates()
  }, [])

  return (
    state.latestRates.cata({
      NotAsked: () => '',
      Loading: () => 'Loading....',
      Failure: err => <div>Failed to fetch currency and exchange rates info ({err})</div>,
      Success: (data) => <LatestRates data={data.rates} />
    })
  )
}

export default CurrentRates