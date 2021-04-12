import React from 'react'
import {Route, Link} from 'react-router-dom'
import Inspiration from './Inspiration'
import {connect} from 'react-redux'
import {deleteInspiration} from '../actions/deleteInspiration'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "green",
  },
}));

const Inspirations = (props) => {

  const classes = useStyles();
  
  const handleDelete = (inspiration) => {
    props.deleteInspiration(inspiration.id)
  }
  
  return (
    <>
    <h2>My Inspirations</h2>
      <div className={classes.root}>

      <List component="nav" aria-label="main">
        {props.inspirations.map(inspiration => 
        
          <ListItem>  
            <Link to={`/inspirations/${inspiration.id}`}>
              {inspiration.name}
            </Link>
            <Button startIcon={<DeleteIcon />} variant="contained" color="primary" onClick={() => handleDelete(inspiration)}>
              Delete
            </Button> 
          </ListItem>)} 
      </ List>
      </div>
    </>
  )
  
}

export default connect(null, {deleteInspiration})(Inspirations)