import React from 'react'
import {connect} from 'react-redux';
import {fetchSessions} from './actions/fetchSessions'
import SessionsContainer from './containers/SessionsContainer'



class App extends React.Component {


  render(){
  return (
    <div className="App">
      <SessionsContainer/>
    </div>
  );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     sessions: state.sessions
//   }
// }


export default connect(null, {fetchSessions})(App);
