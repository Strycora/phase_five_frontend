import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchSessions} from '../actions/fetchSessions'
import Session from '../components/Session'
import Sessions from '../components/Sessions'
import SessionInput from '../components/SessionInput'


class SessionsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchSessions()
  }

  render(){

    return(
      <div>
        <Switch>
          <Route path='/sessions/new' component={SessionInput}/>
          <Route path='/sessions/:id' render={(routerProps) => <Session {...routerProps} sessions={this.props.sessions}/>}/>
          <Route path='/sessions' render={(routerProps) => <Sessions {...routerProps} sessions={this.props.sessions}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    sessions: state.sessions.sessions
  }
}

export default connect(mapStateToProps, {fetchSessions})(SessionsContainer)