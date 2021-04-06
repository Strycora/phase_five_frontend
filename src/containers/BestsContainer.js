import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchBests} from '../actions/fetchBests'
import BestInput from '../components/BestInput'
import Best from '../components/Best'
import Bests from '../components/Bests'



class BestsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchBests()
  }



  render(){
    console.log(this.props.bests)
    return(
      <div>
        <Switch>
          <Route path='/bests/new' component={BestInput}/>
          <Route path='/bests/:id' render={(routerProps) => <Best {...routerProps} bests={this.props.bests}/>}/>
          <Route path='/bests' render={(routerProps) => <Bests {...routerProps} bests={this.props.bests}/>}/>
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = state => {

  return {
    bests: state.bests.bests
  }
}

export default connect(mapStateToProps, {fetchBests})(BestsContainer)