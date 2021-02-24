import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import ConvertAmount from '../../pages/ConvertAmount'
import CurrentRates from '../../pages/CurrentRates/CurrentRates'
import SearchHistory from '../../pages/SearchHistory/SearchHistory'
import './Nav.scss'

const SideMenu = () => {
	
  return (
    <Router>
      <div className="navWrapper">
        <ul>
          <li>
            <Link to="/">Convert</Link>
          </li>
          <li>
            <Link to="/current-rates">Current Rates</Link>
          </li>
		  <li>
            <Link to="/search-history">Search History</Link>
          </li>
        </ul>

         <Switch>
          <Route exact path="/">
            <ConvertAmount />
          </Route>
          <Route path="/current-rates">
          <CurrentRates />
          </Route>
          <Route path="/search-history">
           <SearchHistory />
          </Route>
		  <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default SideMenu