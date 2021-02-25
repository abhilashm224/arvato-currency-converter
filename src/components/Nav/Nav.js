import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink,
  Redirect
} from 'react-router-dom'

import ConvertAmount from '../../pages/ConvertAmount'
import CurrentRates from '../../pages/CurrentRates/CurrentRates'
import SearchHistory from '../../pages/SearchHistory/SearchHistory'
import './Nav.scss'

const SideMenu = () => {

  return (
    <Router>
      <div className='navWrapper'>
        <ul>
          <li>
            <NavLink
              exact
              to='/'
              activeClassName='linkActive'
              className='link'>Convert</NavLink>
          </li>
          <li>
            <NavLink
              to='/current-rates'
              activeClassName='linkActive'
              className='link'>Current Rates</NavLink>
          </li>
          <li>
            <NavLink
              to='/search-history'
              activeClassName='linkActive'
              className='link'>Search History</NavLink>
          </li>
        </ul>

        <div className='contentWrapper'>
          <Switch>
            <Route exact path='/'>
              <ConvertAmount />
            </Route>
            <Route path='/current-rates'>
              <CurrentRates />
            </Route>
            <Route path='/search-history'>
              <SearchHistory />
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}


export default SideMenu