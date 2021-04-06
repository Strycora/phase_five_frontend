import React from 'react'
import {connect} from 'react-redux'
import {addBest} from '../actions/addBest'

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
      <form onSubmit={this.handleSubmit}>
        <label>Workout Name:</label>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
        <label>Workout Weight:</label>
        <input type="text" placeholder="Weight" name="weight" value={this.state.weight} onChange={this.handleChange}/><br></br>
        <label>Workout Reps:</label>
        <input type="text" placeholder="Reps" name="reps" value={this.state.reps} onChange={this.handleChange}/><br></br>
        <input type="submit" />
      </form>
    </div>
   )
  }
}

export default connect(null, {addBest})(BestInput) 