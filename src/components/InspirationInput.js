import React from 'react'
import {connect} from 'react-redux'
import {addInspiration} from '../actions/addInspiration'

class InspirationInput extends React.Component{

  state = {
    name: '',
    image: '',
    bio: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addInspiration(this.state)
    this.setState({
      name: '',
      image: '',
      bio: ''
    })
  }

  render(){
   return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>Inspiration Name:</label>
        <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br>
        <label>Image Url:</label>
        <input type="text" placeholder="Image" name="image" value={this.state.image} onChange={this.handleChange}/><br></br>
        <label>Bio:</label>
        <textarea placeholder="Bio" name="bio" value={this.state.bio} onChange={this.handleChange}/><br></br>
        <input type="submit" />
      </form>
    </div>
   )
  }
}

export default connect(null, {addInspiration})(InspirationInput) 