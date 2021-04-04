import React from 'react'
import {connect} from 'react-redux'
import {fetchSessions} from '../actions/fetchSessions'
import Sessions from '../components/Sessions'
import SessionInput from '../components/SessionInput'


class SessionsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchSessions()
  }

  render(){

    return(
      <div>
        <SessionInput />
        <Sessions sessions={this.props.sessions} />
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    sessions: state.sessions
  }
}

export default connect(mapStateToProps, {fetchSessions})(SessionsContainer)