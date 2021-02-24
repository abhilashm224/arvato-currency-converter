import React, {useContext} from 'react'
import { Table} from 'react-bootstrap'

import { ReducerContext } from '../../Context'
import './SearchHistory.scss'

const SearchHistory = () => {
	 const { state } = useContext(ReducerContext)
	 console.log('in history',state.searchHistory)
  return (
  state.searchHistory.length > 0  ? 
  (<Table striped bordered responsive>
      <thead>
      <tr>
        <th>Amount</th>
        <th>From Currency</th>
		<th>To Currency</th>
		<th>Converted Amount</th>
		<th>Date</th>
      </tr>
      </thead>
      <tbody>
      {state.searchHistory.map((item, key) =>
        <tr key={key}>
          <td>{item.amount}</td>
          <td>{item.fromCurrency}</td>
		  <td>{item.toCurrency}</td>
          <td></td>
		  <td></td>
        </tr>
      )}
      </tbody>
  </Table>) : <div className="noHistory">No search history found</div>
  )
}

export default SearchHistory

