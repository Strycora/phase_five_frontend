export const deleteInspiration = (inspirationId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3001/inspirations/${inspirationId}`, {
      method: 'DELETE',
      headers:{
        "Accept": "application/json",
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then (inspiration => dispatch({type: 'DELETE_INSPIRATION', payload: inspiration}))
  }
}