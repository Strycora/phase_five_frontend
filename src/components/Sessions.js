import React from 'react'
import {Route, Link} from 'react-router-dom'
import Session from './Session'
import {connect} from 'react-redux'
import {deleteSession} from '../actions/deleteSession'
// import {fetchSessions} from '../actions/fetchSessions'

const Sessions = (props) => {

  console.log(props);

  const handleDelete = (session) => {
    props.deleteSession(session.id)
  }
  
  return (
    <div>
      {props.sessions.map(session => 
        <li key={session.id}>
          <Link to={`/sessions/${session.id}`}>{session.name}</Link><button onClick={() => handleDelete(session)}>Delete</button></li> )} 
    </div>
  )

}

export default connect(null, {deleteSession})(Sessions)