import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './ConvertForm.scss'

const ConvertForm = ({ currencyList, formSubmitCallback }) => {

  const [formData, setFormData] = useState({
    amount: '',
    fromCurrency: '',
    toCurrency: '',
    date: ''
  })

  const updateData = (field) => {
    setFormData({
      ...formData,
      ...field
    })
  }

  const convertCurrency = (e) => {
    e.preventDefault()
    formSubmitCallback(formData)
  }

  return (
    <Form onSubmit={convertCurrency}>
      <Form.Group controlId='formGridAmount'>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type='number'
          value={formData.amount}
          placeholder='Enter amount'
          onChange={e => updateData({ amount: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId='formGridFromCurrency'>
          <Form.Label>From Currency</Form.Label>
          <Form.Control
            as='select'
            defaultValue='Choose...'
            onChange={e => updateData({ fromCurrency: e.target.value })}
            required>
            <option value={formData.fromCurrency}>Choose...</option>
            {Object.keys(currencyList).map(key =>
              <option key={key} value={key}>{key}</option>
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridToCurrency'>
          <Form.Label>To Currency</Form.Label>
          <Form.Control
            as='select'
            defaultValue='Choose...'
            onChange={e => updateData({ toCurrency: e.target.value })}
            required>
            <option value={formData.toCurrency}>Choose...</option>
            {Object.keys(currencyList).map(key =>
              <option key={key} value={key}>{key}</option>
            )}
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId='formGridDate'>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type='date'
          value={formData.date}
          placeholder='Choose date'
          onChange={e => updateData({ date: e.target.value })}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Convert
      </Button>
    </Form>
  )
}

ConvertForm.propTypes = {
  currencyList: PropTypes.object.isRequired,
  formSubmitCallback: PropTypes.func.isRequired
}

export default ConvertForm