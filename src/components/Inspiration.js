import React from 'react';
import {Redirect} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
});


const Inspiration = (props) => {

  const classes = useStyles();


  console.log(props)

  let inspiration = props.inspirations.filter(inspiration => inspiration.id == props.match.params.id)[0]


  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          {inspiration ? inspiration.name : null}
      </Typography>
        
          {inspiration ? <img width="200" height="250"  src={inspiration.image}/> : null } 
          
        <br></br>
       <Typography variant="body2" component="p">
         {inspiration ? inspiration.bio : null}
       </Typography>
       </CardContent>
    </Card>
  )
} 

export default Inspiration