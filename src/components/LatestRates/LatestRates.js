import React from 'react'
import PropTypes from 'prop-types'

const LatestRates = ({ data }) => {
  return (
    <table>
      <tbody>
      <tr>
        <th>Currency</th>
        <th>Exchange Rates</th>
      </tr>
      {Object.keys(data).map(key =>
        <tr key={key}>
          <td>{key}</td>
          <td>{data[key]}</td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

LatestRates.propTypes = {
  data: PropTypes.object.isRequired
}

export default LatestRates