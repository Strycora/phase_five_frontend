import React from 'react';
import {Redirect} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Session = (props) => {

  // const {id} = useParams()
  // const {sessions} = props
  // const session = sessions.find(_session => _session.id == id)
  // console.log(session)
  // console.log(sessions)
  // console.log(id)
  console.log(props)
 let session = props.sessions[props.match.params.id -1]
 console.log(session)
  
  // console.log(session)
  return (
    <li>
        {session ? null : <Redirect to='/sessions'/>}
        {session ? session.name : null} - {session ? session.date : null} 
    </li>
  )
} 

export default Session