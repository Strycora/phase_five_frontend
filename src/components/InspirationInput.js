import React from 'react'
import {connect} from 'react-redux'
import {addInspiration} from '../actions/addInspiration'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

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
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField label="Inspiration Name" variant="outlined" color="secondary" name="name" value={this.state.name} onChange={this.handleChange}></TextField><br></br>
        <TextField label="Image URL" variant="outlined" color="secondary" name="image" value={this.state.image} onChange={this.handleChange}></TextField><br></br>
        <TextField label="Bio" variant="outlined" color="secondary" name="bio" value={this.state.bio} onChange={this.handleChange}></TextField><br></br>
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
   )
  }
}

export default connect(null, {addInspiration})(InspirationInput) 