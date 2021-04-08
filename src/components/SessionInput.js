import React from 'react'
import {connect} from 'react-redux'
import {addSession} from '../actions/addSession'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core';





// const useStyles = makeStyles ({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: 'block'
//   }
// })
// const classes = useStyles()

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
      <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField label="Session Name" variant="outlined" color="secondary" name="name" value={this.state.name} onChange={this.handleChange}></TextField>
        {/* <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/><br></br> */}
        <TextField id="date" label="Session Date" type="date" InputLabelProps={{shrink: true,}} name="date" value={this.state.date} onChange={this.handleChange} />
        {/* <input type="date" placeholder="Date" name="date" value={this.state.date} onChange={this.handleChange}/><br></br> */}
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
   )
  }
}

export default connect(null, {addSession})(SessionInput) 