import React from 'react'
import {connect} from 'react-redux'
import {deleteWorkout} from '../actions/deleteWorkout'
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



const Workouts = (props) =>{

  console.log(props.workouts)

  const classes = useStyles();

  const handleDelete = (workout) => {
    props.deleteWorkout(workout.id, workout.session_id)
  }

  return (
    <div className={classes.root}>
      <>
       <List component="nav" aria-label="main">
      {props.workouts && props.workouts.map(workout =>
        // <li key={workout.id}>
        <ListItem > {workout.name} - Sets: {workout.sets} - Reps: {workout.reps} - Weight: {workout.weight}lbs <Button startIcon={<DeleteIcon />} variant="contained" color="primary" onClick={() => handleDelete(workout)}>Delete</Button></ListItem>
        
        )}
        </List>
      </>
    </div>
  )
}

export default connect(null, {deleteWorkout})(Workouts)