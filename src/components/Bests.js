import React from 'react'
import {Route, Link} from 'react-router-dom'
import Best from './Best'

const Bests = (props) => {

  // console.log(props);
  
  return (
    <div>
      Personal Bests
      {props.bests.map(best => 
        <li key={best.id}>
          <Link to={`/bests/${best.id}`}>{best.name}
          </Link></li> )} 
    </div>
  )

}

export default Bests