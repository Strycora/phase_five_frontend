import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchInspirations} from '../actions/fetchInspirations'
import InspirationInput from '../components/InspirationInput'
import Inspiration from '../components/Inspiration'
import Inspirations from '../components/Inspirations'



class InspirationsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchInspirations()
  }



  render(){
    console.log(this.props.inspirations)
    return(
      <div>
        <Switch>
          <Route path='/inspirations/new' component={InspirationInput}/>
          <Route path='/inspirations/:id' render={(routerProps) => <Inspiration {...routerProps} inspirations={this.props.inspirations}/>}/>
          <Route path='/inspirations' render={(routerProps) => <Inspirations {...routerProps} inspirations={this.props.inspirations}/>}/>
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {

  return {
    inspirations: state.inspirations.inspirations
  }
}

export default connect(mapStateToProps, {fetchInspirations})(InspirationsContainer)