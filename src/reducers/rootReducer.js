import sessionsReducer from "./sessionsReducer"
import bestsReducer from "./bestsReducer"
import inspirationsReducer from './inspirationsReducer'
import {combineReducers} from 'redux'
export const rootReducer = combineReducers({
   sessions: sessionsReducer,
   bests: bestsReducer,
   inspirations: inspirationsReducer
})