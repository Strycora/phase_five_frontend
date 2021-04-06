import React from 'react';
import {Redirect} from 'react-router-dom'


const Inspiration = (props) => {


  console.log(props)

  let inspiration = props.inspirations.filter(inspiration => inspiration.id == props.match.params.id)[0]


  return (
    <div>
      <h2>
          {inspiration ? inspiration.name : null}
      </h2>
        
          {inspiration ? <img width="200" height="250"  src={inspiration.image}/> : null } 
          
        <br></br>
       <p>{inspiration ? inspiration.bio : null}</p>
    </div>  
  )
} 

export default Inspiration