import React from 'react'
import {connect} from 'react-redux'
import {deleteWorkout} from '../actions/deleteWorkout'

const Workouts = (props) =>{

  console.log(props.workouts)

  const handleDelete = (workout) => {
    props.deleteWorkout(workout.id, workout.session_id)
  }

  return (
    <div>
      {props.workouts && props.workouts.map(workout =>
        <li key={workout.id}>
          {workout.name} - Sets: {workout.sets} - Reps: {workout.reps} - Weight: {workout.weight}lbs <button onClick={() => handleDelete(workout)}>Delete</button>
        </li>
        )}
    </div>
  )
}

export default connect(null, {deleteWorkout})(Workouts)