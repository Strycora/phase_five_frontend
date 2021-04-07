import React from 'react'
import {Route, Link} from 'react-router-dom'
import Inspiration from './Inspiration'
import {connect} from 'react-redux'
import {deleteInspiration} from '../actions/deleteInspiration'

const Inspirations = (props) => {

 
  
  const handleDelete = (inspiration) => {
    props.deleteInspiration(inspiration.id)
  }
  
  return (
    <div>
      My Inspirations
      {props.inspirations.map(inspiration => 
        <li key={inspiration.id}>
          <Link to={`/inspirations/${inspiration.id}`}>{inspiration.name}</Link><button onClick={() => handleDelete(inspiration)}>Delete</button></li> )} 
    </div>
  )

}

export default connect(null, {deleteInspiration})(Inspirations)