const initialState = {
  bests: []
}
const bestsReducer = (state = initialState, action) => {

  switch(action.type){

    case 'FETCH_BESTS':
      return {bests: action.payload}
    case 'ADD_BEST':
      return {...state, bests: [...state.bests, action.payload]}
    default:
      return state  
  }


}

export default bestsReducer