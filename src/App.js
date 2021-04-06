import React from 'react'
import {connect} from 'react-redux';
import {fetchSessions} from './actions/fetchSessions'
import SessionsContainer from './containers/SessionsContainer'
import BestsContainer from './containers/BestsContainer'
import InspirationsContainer from './containers/InspirationsContainer'
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
      <BestsContainer/>
      <InspirationsContainer />
    </div>
  );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     sessions: state.sessions
//   }
// }


export default App;
