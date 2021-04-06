import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sessions'>Sessions</Link></li>
          <li><Link to='/sessions/new'>New Session</Link></li>

        </ul>
      </div>
    )
  }
}

export default Nav
