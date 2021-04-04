import React from 'react';
import {Redirect} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import WorkoutsContainer from '../containers/WorkoutsContainer'

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
    <div>
      <h2>
          {session ? session.name : null} - {session ? session.date : null} 
      </h2>
      <WorkoutsContainer session={session}/>
    </div>  
  )
} 

export default Session