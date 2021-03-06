const initialState = { 
  sessions: []
}

const sessionsReducer = (state = initialState, action) => {
  
  switch(action.type){

    case 'FETCH_SESSIONS': 
      return {sessions: action.payload}
    case 'ADD_SESSION':
      return {...state, sessions: [...state.sessions, action.payload]}
    case 'ADD_WORKOUT':
      let sessions = state.sessions.map(session => {
        if(session.id === action.payload.id){
          return action.payload
        } else{
          return session
        }
      })
      return {...state, sessions: sessions}
    case 'DELETE_SESSION':
      let sessionDelete = state.sessions.filter(session => {
       return  (session.id !== action.payload.id)
      })
      return {...state, sessions: sessionDelete}
    case 'DELETE_WORKOUT':
      let sessionDeleteWorkout = state.sessions.map(session => {
        if(session.id === action.payload.id){
          return action.payload
        } else{
          return session
        }
      })
      return {...state, sessions: sessionDeleteWorkout}
    default:
      return state;
  }
}

export default sessionsReducer;