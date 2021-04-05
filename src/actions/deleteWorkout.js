export const deleteWorkout = (workoutId, sessionId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3001/sessions/${sessionId}/workouts/${workoutId}`, {
      method: 'DELETE',
      headers:{
        "Accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then (session => dispatch({type: 'DELETE_WORKOUT', payload: session}))
  }
}