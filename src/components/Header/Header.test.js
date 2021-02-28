import React from 'react'
import {cleanup, render} from '@testing-library/react';
import Header from './Header'

describe('Header component', () =>{
	
	afterEach(()=> {
		cleanup()
		});
	
	it('renders the header text', ()=> {
		 const {queryByTestId} = renderComponent()
		expect(queryByTestId('currency-converter-header').textContent).toMatch(/Currency Converter/)
	})
	
	
})

function renderComponent(){
	return render(<Header />)
}

