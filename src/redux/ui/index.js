import { combineReducers } from 'redux'
import newTodo from './newTodo'
import completed from './completed'
import editing from './editing'

export default combineReducers({
  completed,
  editing,
  newTodo,
})
