import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteBest} from '../actions/deleteBest'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button } from '@material-ui/core';
import Best from './Best'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "green",
  },
}));

const Bests = (props) => {

  const classes = useStyles();

  const handleDelete = (best) => {
    props.deleteBest(best.id)
  }
  
  return (
    <>
    <h2>Personal Bests</h2>
    <div className={classes.root}>
      <List component="nav" aria-label="main">
      {props.bests.map(best => 
         <ListItem> <Link to={`/bests/${best.id}`}>{best.name}</Link><Button startIcon={<DeleteIcon />} variant="contained" color="primary" onClick={() => handleDelete(best)}>Delete</Button> </ListItem>)} 
      </List>
    </div>
    </>
  )

}

export default connect(null, {deleteBest})(Bests)