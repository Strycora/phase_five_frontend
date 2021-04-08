import React from 'react'
import {Route, Link} from 'react-router-dom'
import Session from './Session'
import {connect} from 'react-redux'
import {deleteSession} from '../actions/deleteSession'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
// import {fetchSessions} from '../actions/fetchSessions'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "green",
  },
}));

const Sessions = (props) => {


  const classes = useStyles();
  console.log(props);

  const handleDelete = (session) => {
    props.deleteSession(session.id)
  }
  
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main">
      {props.sessions.map(session => 
          <ListItem button><Link to={`/sessions/${session.id}`}> {session.name}</Link><button onClick={() => handleDelete(session)}>Delete</button>  </ListItem>)} 
          </List>
    </div>
  )
  // 
}

export default connect(null, {deleteSession})(Sessions)