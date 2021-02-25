import React from 'react'
import PropTypes from 'prop-types'
import { Table as BootstrapTable } from 'react-bootstrap'
import './Table.scss'

//common table component
const Table = ({ data }) => (
  <BootstrapTable striped bordered>
    <thead>
    <tr>
      {Object.keys(data[0]).map(key =>
        <th key={key}>{key}</th>
      )}
    </tr>
    </thead>
    <tbody>
    {data.map((item, index) =>
      <tr key={index}>
        {Object.keys(item).map((value, index) =>
          <td key={index}>{item[value]}</td>
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