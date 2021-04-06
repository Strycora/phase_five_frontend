const initialState = {
  inspirations: []
}
const inspirationsReducer = (state = initialState, action) => {

  switch(action.type){

    case 'FETCH_INSPIRATIONS':
      return {inspirations: action.payload}
    default:
      return state  
  }


}

export default inspirationsReducer