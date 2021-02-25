import React, { useContext } from 'react'
import Table from '../../components/Table/Table'
import { ReducerContext } from '../../Context'
import './SearchHistory.scss'

const SearchHistory = () => {
  const { state } = useContext(ReducerContext)

  return (
    state.searchHistory.length > 0 ? <Table data={state.searchHistory} /> :
      <div className='noHistory'>No search history found</div>
  )
}

export default SearchHistory

