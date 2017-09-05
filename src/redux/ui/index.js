import { combineReducers } from 'redux'
import { reducer } from './router'
import newTodo from './newTodo'

export const path = 'ui'

export default combineReducers({
  newTodo,
  router: reducer,
})
