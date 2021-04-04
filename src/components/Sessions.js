import React from 'react'
import {Route, Link} from 'react-router-dom'
import Session from './Session'

const Sessions = (props) => {

  // console.log(props);
  
  return (
    <div>
      {props.sessions.map(session => 
        <li key={session.id}>
          <Link to={`/sessions/${session.id}`}>{session.name}
          </Link></li> )} 
    </div>
  )

}

export default Sessions