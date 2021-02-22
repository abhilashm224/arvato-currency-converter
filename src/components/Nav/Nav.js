import React from 'react'

import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href='/home'>Convert</a></li>
        <li><a href='/current-rates'>Currency Rates</a></li>
        <li><a href='/search-history'>Search History</a></li>
      </ul>
    </nav>
  )
}


export default Nav