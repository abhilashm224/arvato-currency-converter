import React from 'react'
import { ReducerProvider } from './Context'
import Header from './components/Header/Header'
import SideMenu from './components/Nav/Nav'
import './App.scss'

function App() {
  return (
    <div className='App'>
      <ReducerProvider>
        <Header />
        <section className='Wrapper'>
          <SideMenu />
        </section>
      </ReducerProvider>
    </div>
  )
}

export default App
