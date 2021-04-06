import sessionsReducer from "./sessionsReducer"
import bestsReducer from "./bestsReducer"
import {combineReducers} from 'redux'
export const rootReducer = combineReducers({
   sessions: sessionsReducer,
   bests: bestsReducer
})