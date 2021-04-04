const initialState = { 
  sessions: [],
  loading: true
}

const sessionsReducer = (state = initialState, action) => {
  
  switch(action.type){

    case 'FETCH_SESSIONS': 
      return {sessions: action.payload}
    case 'ADD_SESSION':
      return {...state, sessions: [...state.sessions, action.payload]}
    default:
      return state;
  }
}

export default sessionsReducer;