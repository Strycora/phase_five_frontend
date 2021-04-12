import React from 'react'
import {connect} from 'react-redux'
import {addBest} from '../actions/addBest'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

class BestInput extends React.Component{

  state = {
    name: '',
    weight: '',
    reps: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBest(this.state)
    this.setState({
      name: '',
      weight: '',
      reps: ''
    })
  }

  render(){
   return (
    <div>
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField label="Workout Name" type="text" variant="outlined" color="secondary" name="name" value={this.state.name} onChange={this.handleChange}></TextField><br></br>
        <TextField label="Workout Weight" type="number" variant="outlined" color="secondary" name="weight" value={this.state.weight} onChange={this.handleChange}></TextField><br></br>
        <TextField label="Workout Reps" type="number" variant="outlined" color="secondary" name="reps" value={this.state.reps} onChange={this.handleChange}></TextField><br></br>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
   )
  }
}

export default connect(null, {addBest})(BestInput) 