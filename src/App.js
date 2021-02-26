import React from 'react'
import { ReducerProvider } from './Context'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <ReducerProvider>
        <Header />
        <section className='Wrapper'>
          <Nav />
        </section>
      </ReducerProvider>
    </div>
  )
}

export default App
