import React from 'react'

const Workouts = (props) =>{

  console.log(props)
  return (
    <div>
      {props.workouts && props.workouts.map(workout =>
        <li key={workout.id}>
          {workout.name} - Sets: {workout.sets} - Reps: {workout.reps} - Weight: {workout.weight}lbs
        </li>
        )}
    </div>
  )
}

export default Workouts