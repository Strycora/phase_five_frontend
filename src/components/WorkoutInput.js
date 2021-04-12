import React from 'react'
import {connect} from 'react-redux'
import {addWorkout} from '../actions/addWorkout'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

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
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>

          <TextField label="Workout Name" variant="outlined" color="secondary" name="name" value={this.state.name} onChange={this.handleChange}></TextField><br></br>
          <TextField label="Number of Sets" type="number" variant="outlined" color="secondary" name="sets" value={this.state.sets} onChange={this.handleChange}></TextField><br></br>
          <TextField label="Number of Reps" type="number" variant="outlined" color="secondary" name="reps" value={this.state.reps} onChange={this.handleChange}></TextField><br></br>
          <TextField label="Weight" type="number" variant="outlined" color="secondary" name="weight" value={this.state.weight} onChange={this.handleChange}></TextField><br></br>
          
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addWorkout})(WorkoutInput)