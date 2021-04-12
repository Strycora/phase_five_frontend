import React from 'react'
import {Route, Link} from 'react-router-dom'
import Inspiration from './Inspiration'
import {connect} from 'react-redux'
import {deleteInspiration} from '../actions/deleteInspiration'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button } from '@material-ui/core';

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
              <button onClick={() => handleDelete(inspiration)}>
                Delete
              </button> 
          </ListItem>)} 
      </ List>
      </div>
    </>
  )
  
}

export default connect(null, {deleteInspiration})(Inspirations)