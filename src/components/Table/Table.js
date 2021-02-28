import React from 'react'
import PropTypes from 'prop-types'
import { Table as BootstrapTable } from 'react-bootstrap'
import './Table.scss'

//reusable table component
const Table = ({ data }) => (
  <BootstrapTable striped bordered data-testid="currency-converter-table">
    <thead>
    <tr>
      {Object.keys(data[0]).map(key =>
        <th key={key} data-testid={`currency-converter-table-header-${key}`}>{key}</th>
      )}
    </tr>
    </thead>
    <tbody>
    {data.map((item, index) =>
      <tr key={index} data-testid={`currency-converter-table-body-row-${index}`}>
        {Object.keys(item).map((value, i) =>
          <td key={i} data-testid={`currency-converter-table-body-cell-${index}${i}`}>{item[value]}</td>
        )}
      </tr>
    )}
    </tbody>
  </BootstrapTable>
)


Table.propTypes = {
  data: PropTypes.array.isRequired
}


export default Table