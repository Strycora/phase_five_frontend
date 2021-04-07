const initialState = {
  inspirations: []
}
const inspirationsReducer = (state = initialState, action) => {

  switch(action.type){

    case 'FETCH_INSPIRATIONS':
      return {inspirations: action.payload}
    case 'ADD_INSPIRATION':
      return {...state, inspirations: [...state.inspirations, action.payload]}
    case 'DELETE_INSPIRATION':
        let inspirationDelete = state.inspirations.filter(inspiration => {
         return  (inspiration.id !== action.payload.id)
        })
        return {...state, inspirations: inspirationDelete}
    default:
      return state  
  }


}

export default inspirationsReducer