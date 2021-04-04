import React from 'react'
import {connect} from 'react-redux'
import {addSession} from '../actions/addSession'

class SessionInput extends React.Component{

  state = {
    name: '',
    date: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addSession(this.state)
    this.setState({
      name: '',
      date: ''
    })
  }

  render(){
   return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Session Name:</label>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
        <label>Session Date:</label>
        <input type="date" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange}/><br></br>
        <input type="submit" />
      </form>
    </div>
   )
  }
}

export default connect(null, {addSession})(SessionInput) 