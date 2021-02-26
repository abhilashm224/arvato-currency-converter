import React, { useEffect, useContext } from 'react'
import { ReducerContext } from '../../Context'
import Table from '../../components/Table/Table'

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
      Success: (data) => {
        const tableData = getTableData(data.rates)
        return <>
          <p>Base currency : Euro(€)</p>
          <Table data={tableData} />
        </>

      }
    })
  )
}

function getTableData(data) {
  let tableData = []
  Object.keys(data).map(key => tableData.push({ 'Currency': key, 'Exchange Rate': data[key].toFixed(2) }))
  return tableData
}

export default CurrentRates