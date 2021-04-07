const initialState = {
  bests: []
}
const bestsReducer = (state = initialState, action) => {

  switch(action.type){

    case 'FETCH_BESTS':
      return {bests: action.payload}
    case 'ADD_BEST':
      return {...state, bests: [...state.bests, action.payload]}
    case 'DELETE_BEST':
      let bestDelete = state.bests.filter(best => {
        return  (best.id !== action.payload.id)
       })
       return {...state, bests: bestDelete}
    default:
      return state  
  }


}

export default bestsReducer