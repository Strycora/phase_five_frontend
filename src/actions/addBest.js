export const addBest = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3001/bests', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(best => dispatch({type: 'ADD_BEST', payload: best}))
  }
}