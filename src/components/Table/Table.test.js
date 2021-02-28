import React from 'react'
import {cleanup, render, queries, within} from '@testing-library/react';
import Table from './Table'


describe('Table component', () =>{

	const tableData = [{
		"Currency" : "NOK",
		"Exchange Rate" : "10.83"
	},
	{
		"Currency" : "INR",
		"Exchange Rate" : "87.83"
	}]
	
const renderComponent = ()=> {
	return render(<Table data={tableData}/>)
}

	afterEach(()=> {
		cleanup()
		});
	
	it('renders the table', ()=> {
		 const {queryByTestId} = renderComponent()
		expect(queryByTestId('currency-converter-table')).not.toBeNull()
	})
	
	it('renders the correct table headers', ()=> {
		 const {queryByTestId} = renderComponent()
		 Object.keys(tableData[0]).forEach(key => {
			 const headerText = `${key}`
			expect(queryByTestId(`currency-converter-table-header-${key}`).textContent).toMatch(headerText)
		 }
		)
	})
	
	it('renders the correct table rows', ()=> {
		 const {queryByTestId} = renderComponent()
		 tableData.forEach((item, index) =>
			expect(queryByTestId(`currency-converter-table-body-row-${index}`)).not.toBeNull()
		)
	})
	
	it('renders the correct table cells', ()=> {
		 const {queryByTestId} = renderComponent()
		 tableData.forEach((item, index) =>
			Object.keys(item).forEach((value, i) =>{
				const cellText = `${item[value]}`
				expect(queryByTestId(`currency-converter-table-body-cell-${index}${i}`).textContent).toMatch(cellText)
			}
			)
		)
	})
})

