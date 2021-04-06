export const addInspiration = (inspiration) => {

  return (dispatch) => {
    fetch(`http://localhost:3001/inspirations`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inspiration)
    })
    .then(resp => resp.json())
    .then(inspiration => dispatch({type: 'ADD_INSPIRATION', payload: inspiration}))
  }
}