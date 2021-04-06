import React from 'react'
import {connect} from 'react-redux';
import {fetchSessions} from './actions/fetchSessions'
import SessionsContainer from './containers/SessionsContainer'
import Home from './components/Home'
import Nav from './components/Nav'
import {Switch, Route} from 'react-router-dom'



class App extends React.Component {


  render(){
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
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
