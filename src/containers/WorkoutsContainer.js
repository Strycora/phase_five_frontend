import React from 'react'
import WorkoutInput from '../components/WorkoutInput'
import Workouts from '../components/Workouts'

class WorkoutsContainer extends React.Component{

  render(){
    return(
      <div>
        <WorkoutInput session={this.props.session}/>
        <Workouts workouts={this.props.session && this.props.session.workouts} />
      </div>
    )
  }
}

export default WorkoutsContainer