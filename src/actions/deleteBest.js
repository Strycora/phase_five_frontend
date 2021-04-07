export const deleteBest = (bestId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3001/bests/${bestId}`, {
      method: 'DELETE',
      headers:{
        "Accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then (best => dispatch({type: 'DELETE_BEST', payload: best}))
  }
}