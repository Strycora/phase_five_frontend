import React from 'react'
import {Route, Link} from 'react-router-dom'
import Inspiration from './Inspiration'

const Inspirations = (props) => {

  // console.log(props);
  
  return (
    <div>
      My Inspirations
      {props.inspirations.map(inspiration => 
        <li key={inspiration.id}>
          <Link to={`/inspirations/${inspiration.id}`}>{inspiration.name}
          </Link></li> )} 
    </div>
  )

}

export default Inspirations