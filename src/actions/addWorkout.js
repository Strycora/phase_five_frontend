export const addWorkout = (workout, sessionId) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/sessions/${sessionId}/workouts`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    })
    .then(resp => resp.json())
    .then(session => dispatch({type: 'ADD_WORKOUT', payload: session}))
  }
}