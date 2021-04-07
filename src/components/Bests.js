import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteBest} from '../actions/deleteBest'
import Best from './Best'

const Bests = (props) => {

  const handleDelete = (best) => {
    props.deleteBest(best.id)
  }
  
  return (
    <div>
      Personal Bests
      {props.bests.map(best => 
        <li key={best.id}>
          <Link to={`/bests/${best.id}`}>{best.name}</Link><button onClick={() => handleDelete(best)}>Delete</button></li> )} 
    </div>
  )

}

export default connect(null, {deleteBest})(Bests)