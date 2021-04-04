export const addSession = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3001/sessions', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(session => dispatch({type: 'ADD_SESSION', payload: session}))
  }
}