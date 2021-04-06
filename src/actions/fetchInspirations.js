export function fetchInspirations(){
  return (dispatch) => {
    fetch('http://localhost:3001/inspirations')
    .then(resp => resp.json())
    .then(inspirations => dispatch({
      type: 'FETCH_INSPIRATIONS',
      payload: inspirations
    }))
  }

}