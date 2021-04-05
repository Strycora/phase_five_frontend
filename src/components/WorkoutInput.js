import React from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'

class WorkoutInput extends React.Component{


  state={
    name: '',
    sets: '',
    reps: '',
    weight: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addWorkout(this.state, this.props.session.id)
    this.setState({
      name: '',
      sets: '',
      reps: '',
      weight: ''
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Workout Name:</label>
          <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
          <label>Number of Sets:</label>
          <input type="number" name="sets" value={this.state.sets} onChange={this.handleChange}/><br></br>
          <label>Number of Reps:</label>
          <input type="number" name="reps" value={this.state.reps} onChange={this.handleChange}/><br></br>
          <label>Weight:</label>
          <input type="number" name="weight" value={this.state.weight} onChange={this.handleChange}/><br></br>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addWorkout})(WorkoutInput)