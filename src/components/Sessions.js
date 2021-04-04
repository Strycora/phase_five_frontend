import React from 'react'

const Sessions = (props) => {
  
  return (
    <div>
      {props.sessions.map(session => <li key={session.id}>{session.name} - {session.date}</li> )} 
    </div>
  )

}

export default Sessions