

export function fetchSessions(){
  return (dispatch) => {
    fetch('http://localhost:3001/sessions')
    .then(resp => resp.json())
    .then(sessions => dispatch({
      type: 'FETCH_SESSIONS',
      payload: sessions
    }))
  }

}