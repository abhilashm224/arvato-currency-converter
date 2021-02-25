import React, { useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
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
    <div className='formWrapper'>
      <Form onSubmit={convertCurrency}>
        <Form.Group as={Row} controlId='formGridAmount'>
          <Form.Label column sm='3'>Amount</Form.Label>
          <Col sm='9'>
            <Form.Control
              type='number'
              min='0'
              value={formData.amount}
              placeholder='Enter amount'
              onChange={e => updateData({ amount: e.target.value })}
              required
            />
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId='formGridFromCurrency'>
          <Form.Label column sm='3'>From</Form.Label>
          <Col sm='9'>
            <Form.Control
              as='select'
              defaultValue='Select...'
              onChange={e => updateData({ fromCurrency: e.target.value })}
              required>
              <option value={formData.fromCurrency}>Select...</option>
              {Object.keys(currencyList).map(key =>
                <option key={key} value={key}>{key}</option>
              )}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formGridToCurrency'>
          <Form.Label column sm='3'>To</Form.Label>
          <Col sm='9'>
            <Form.Control
              as='select'
              defaultValue='Select...'
              onChange={e => updateData({ toCurrency: e.target.value })}
              required>
              <option value={formData.toCurrency}>Select...</option>
              {Object.keys(currencyList).map(key =>
                <option key={key} value={key}>{key}</option>
              )}
            </Form.Control>
          </Col>
        </Form.Group>


        <Form.Group as={Row} controlId='formGridDate'>
          <Form.Label column sm='3'>Date</Form.Label>
          <Col sm='9'>
            <Form.Control
              type='date'
              value={formData.date}
              placeholder='Choose date'
              onChange={e => updateData({ date: e.target.value })}
            />
          </Col>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Convert
        </Button>
      </Form>

    </div>
  )
}

ConvertForm.propTypes = {
  currencyList: PropTypes.object.isRequired,
  formSubmitCallback: PropTypes.func.isRequired
}

export default ConvertForm