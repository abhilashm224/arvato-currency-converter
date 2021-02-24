import React from 'react'
import PropTypes from 'prop-types'
import { Table} from 'react-bootstrap'

const LatestRates = ({ data }) => {
  return (
    <Table striped bordered>
      <thead>
      <tr>
        <th>Currency</th>
        <th>Exchange Rates</th>
      </tr>
      </thead>
      <tbody>
      {Object.keys(data).map(key =>
        <tr key={key}>
          <td>{key}</td>
          <td>{data[key]}</td>
        </tr>
      )}
      </tbody>
    </Table>
  )
}

LatestRates.propTypes = {
  data: PropTypes.object.isRequired
}

export default LatestRates