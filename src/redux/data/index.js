import { combineReducers } from 'redux'
import todos from './todos'

/* Reducer name */
export const path = 'data'

/* Combine on data reducer */
export default combineReducers({
  todos,
})
