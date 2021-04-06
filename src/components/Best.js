import React from 'react';
import {Redirect} from 'react-router-dom'


const Best = (props) => {


  // console.log(props)
//  let session = props.sessions[props.match.params.id -1]
  let best = props.bests.filter(best => best.id == props.match.params.id)[0]
//  console.log(best)
  
  // console.log(session)
  return (
    <div>
      <h2>
          {best ? best.name : null}
      </h2>
       <p> {best ? best.weight : null}lbs {best ? best.reps : null} reps</p>
    </div>  
  )
} 

export default Best