import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { ReducerProvider } from './Context'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ConvertAmount from './pages/ConvertAmount'
import CurrentRates from './pages/CurrentRates'
import SearchHistory from './pages/SearchHistory'
import './App.css'


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/home'><ConvertAmount /></Route>
        <Route path='/current-rates'><CurrentRates /></Route>
        <Route path='/search-history'><SearchHistory /></Route>
      </Switch>
    </Router>
  )
}

function App() {
  return (
    <div className='App'>
      <ReducerProvider>
        <Header />
        <Nav />
        <AppRouter />
      </ReducerProvider>
    </div>
  )
}

export default App
