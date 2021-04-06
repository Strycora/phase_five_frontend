export function fetchBests(){
  return (dispatch) => {
    fetch('http://localhost:3001/bests')
    .then(resp => resp.json())
    .then(bests => dispatch({
      type: 'FETCH_BESTS',
      payload: bests
    }))
  }

}