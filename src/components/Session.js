import React from 'react';
import {Redirect} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import WorkoutsContainer from '../containers/WorkoutsContainer'

const Session = (props) => {


  console.log(props)
//  let session = props.sessions[props.match.params.id -1]
  let session = props.sessions.filter(session => session.id == props.match.params.id)[0]
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